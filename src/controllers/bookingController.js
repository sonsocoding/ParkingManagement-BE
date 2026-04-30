import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";
import { createBookingSchema } from "../schemas/bookingSchema.js";
import { buildVnpayPaymentUrl } from "../utils/vnpay.js";
import { findEligibleMonthlyPass } from "../utils/monthlyPass.js";
import {
  assertVehicleAvailableForActiveUse,
  HttpError,
} from "../utils/activeVehicleUsage.js";

const VALID_TRANSITIONS = {
  PENDING_PAYMENT: ["CONFIRMED", "CANCELLED"],
  CONFIRMED: ["COMPLETED", "CANCELLED"],
  COMPLETED: [], // terminal state
  CANCELLED: [], // terminal state
};

const bookingInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
    },
  },
  vehicle: {
    select: {
      id: true,
      plateNumber: true,
      vehicleType: true,
      color: true,
    },
  },
  parkingLot: {
    select: {
      id: true,
      name: true,
      address: true,
      lotType: true,
      totalSlots: true,
      carHourlyRate: true,
      motorbikeHourlyRate: true,
    },
  },
  parkingSlot: {
    select: {
      id: true,
      slotNumber: true,
      zoneId: true,
      vehicleType: true,
      status: true,
    },
  },
  monthlyPass: {
    select: {
      id: true,
      vehicleType: true,
      status: true,
      startDate: true,
      endDate: true,
    },
  },
};

const formatBooking = (booking) => {
  if (!booking) return null;
  return {
    ...booking,
    slot: booking.parkingSlot ?? booking.slot ?? null,
  };
};

const formatBookings = (bookings) => bookings.map(formatBooking);

// find the final state of the booking after applying the updates & validating
// used by updateOwnBooking and UpdateBookingById
const getEffectiveBookingState = async (
  db,
  existingBooking,
  { vehicleId, parkingSlotId, parkingLotId },
  userId = null,
) => {
  // Update flows can change only some fields, so we resolve the "final" vehicle/slot/lot
  // first validate that combined state before writing anything.
  const effectiveVehicleId = vehicleId || existingBooking.vehicleId;
  const effectiveParkingSlotId = parkingSlotId || existingBooking.parkingSlotId;
  const effectiveParkingLotId = parkingLotId || existingBooking.parkingLotId;

  const [vehicle, parkingSlot, parkingLot] = await Promise.all([
    db.vehicle.findUnique({
      where: { id: effectiveVehicleId },
    }),
    db.parkingSlot.findUnique({
      where: { id: effectiveParkingSlotId },
    }),
    db.parkingLot.findUnique({
      where: { id: effectiveParkingLotId },
    }),
  ]);

  if (!vehicle) {
    throw new HttpError(404, "Vehicle not found");
  }
  if (userId && vehicle.userId !== userId) {
    throw new HttpError(403, "This is not your vehicle");
  }
  if (!parkingSlot) {
    throw new HttpError(404, "Parking slot not found");
  }
  if (!parkingLot) {
    throw new HttpError(404, "Parking lot not found");
  }
  if (parkingSlot.parkingLotId !== parkingLot.id) {
    throw new HttpError(400, "Parking lot and parking slot do not match");
  }
  if (vehicle.vehicleType !== parkingSlot.vehicleType) {
    throw new HttpError(400, "Vehicle type and parking slot type do not match");
  }

  return { vehicle, parkingSlot, parkingLot };
};

// Helper: recalculate estimated cost from booking's related data
const calculateNewCost = async (startTime, endTime, existingBooking) => {
  const [parkingLot, vehicle] = await Promise.all([
    prisma.parkingLot.findUnique({
      where: { id: existingBooking.parkingLotId },
    }),
    prisma.vehicle.findUnique({ where: { id: existingBooking.vehicleId } }),
  ]);

  const hours = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60);
  const rate =
    vehicle.vehicleType === "CAR"
      ? parkingLot.carHourlyRate
      : parkingLot.motorbikeHourlyRate;
  return Number(rate) * hours;
};

const resolveMonthlyPassForBooking = async (
  db,
  existingBooking,
  updateData,
) => {
  if (existingBooking.paymentMethod !== "MONTHLY_PASS") {
    return existingBooking.monthlyPassId;
  }

  const effectiveVehicleId = updateData.vehicleId || existingBooking.vehicleId;
  const effectiveStartTime = updateData.startTime || existingBooking.startTime;
  const effectiveEndTime = updateData.endTime || existingBooking.endTime;

  const vehicle = await db.vehicle.findUnique({
    where: { id: effectiveVehicleId },
  });

  if (!vehicle) {
    throw new Error("Vehicle not found");
  }

  const activePass = await findEligibleMonthlyPass(db, {
    userId: existingBooking.userId,
    vehicleType: vehicle.vehicleType,
    startTime: effectiveStartTime,
    endTime: effectiveEndTime,
    monthlyPassId: existingBooking.monthlyPassId,
  });

  if (!activePass) {
    throw new Error(
      "The linked monthly pass no longer covers this updated booking.",
    );
  }

  return activePass.id;
};

const createBooking = asyncHandler(async (req, res) => {
  const validatedData = createBookingSchema.parse({ body: req.body });
  const {
    vehicleId,
    parkingSlotId,
    parkingLotId,
    startTime,
    endTime,
    paymentMethod,
  } = validatedData.body;
  const userId = req.user.id;

  // use $transaction here to prevent race condition
  const result = await prisma.$transaction(async (tx) => {
    // find slot and lock it
    const parkingSlot = await tx.parkingSlot.findUnique({
      where: { id: parkingSlotId },
    });
    if (!parkingSlot) {
      throw new HttpError(404, "Parking slot not found");
    }
    if (parkingSlot.status !== "AVAILABLE") {
      throw new HttpError(400, "Parking slot is not available");
    }

    // find parking lot, check if it matches with slot
    const parkingLot = await tx.parkingLot.findUnique({
      where: { id: parkingLotId },
    });
    if (!parkingLot) {
      throw new HttpError(404, "Parking lot not found");
    }
    if (parkingLot.id !== parkingSlot.parkingLotId) {
      throw new HttpError(400, "Parking lot and parking slot do not match");
    }

    // find vehicle, check if user owns it, check if matches with slot type
    const vehicle = await tx.vehicle.findUnique({
      where: { id: vehicleId },
    });
    if (!vehicle) {
      throw new HttpError(404, "Vehicle not found");
    }
    if (vehicle.userId !== userId) {
      throw new HttpError(403, "This is not your vehicle");
    }
    if (vehicle.vehicleType !== parkingSlot.vehicleType) {
      throw new HttpError(
        400,
        "Vehicle type and parking slot type do not match",
      );
    }

    // Core exclusivity rule: a vehicle cannot hold another active booking
    // or already be parked when we create a new active booking for it.
    await assertVehicleAvailableForActiveUse(tx, { vehicleId });

    // calculate estimate cost
    const hours = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60);
    const estimatedCost =
      (vehicle.vehicleType === "CAR"
        ? parkingLot.carHourlyRate
        : parkingLot.motorbikeHourlyRate) * hours;

    let bookingStatus = "CONFIRMED";
    let bookingMonthlyPassId = null;

    if (paymentMethod === "VNPAY") {
      bookingStatus = "PENDING_PAYMENT";
    } else if (paymentMethod === "MONTHLY_PASS") {
      const activePass = await findEligibleMonthlyPass(tx, {
        userId,
        vehicleType: vehicle.vehicleType,
        startTime,
        endTime,
      });

      if (!activePass) {
        throw new HttpError(
          400,
          "No eligible active monthly pass covers this vehicle type and booking time.",
        );
      }

      bookingMonthlyPassId = activePass.id;
    }

    const booking = await tx.booking.create({
      data: {
        userId,
        vehicleId,
        parkingSlotId,
        parkingLotId,
        startTime,
        endTime,
        estimatedCost,
        paymentMethod,
        status: bookingStatus,
        monthlyPassId: bookingMonthlyPassId,
      },
      include: bookingInclude,
    });

    const updatedSlot = await tx.parkingSlot.update({
      where: { id: parkingSlotId },
      data: {
        status: "RESERVED",
      },
    });

    let payment = null;
    let paymentUrl = null;
    let paymentExpiresAt = null;
    if (paymentMethod === "VNPAY") {
      payment = await tx.payment.create({
        data: {
          userId,
          bookingId: booking.id,
          amount: estimatedCost,
          method: "VNPAY",
          status: "PENDING",
          metadata: {
            type: "BOOKING",
            bookingId: booking.id,
          },
        },
      });

      const vnpayPayload = buildVnpayPaymentUrl({
        req,
        paymentId: payment.id,
        amount: estimatedCost,
        orderInfo: `Booking payment ${booking.id}`,
      });
      paymentUrl = vnpayPayload.paymentUrl;
      paymentExpiresAt = vnpayPayload.expiresAt;
    }

    return { booking, updatedSlot, payment, paymentUrl, paymentExpiresAt };
  });
  const responseData = {
    booking: formatBooking(result.booking),
    parkingSlot: result.updatedSlot,
  };
  if (result.payment) {
    responseData.payment = result.payment;
    responseData.paymentUrl = result.paymentUrl;
    responseData.paymentExpiresAt = result.paymentExpiresAt;
  }

  return res.status(201).json(formatSuccess(responseData));
});

const getOwnBooking = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const bookings = await prisma.booking.findMany({
    where: { userId },
    include: bookingInclude,
  });

  return res
    .status(200)
    .json(formatSuccess({ bookings: formatBookings(bookings) }));
});

const getAllBooking = asyncHandler(async (req, res) => {
  const bookings = await prisma.booking.findMany({
    include: bookingInclude,
  });

  return res
    .status(200)
    .json(formatSuccess({ bookings: formatBookings(bookings) }));
});

const getBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await prisma.booking.findUnique({
    where: { id },
    include: bookingInclude,
  });

  if (!booking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  return res
    .status(200)
    .json(formatSuccess({ booking: formatBooking(booking) }));
});

const updateOwnBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { vehicleId, parkingSlotId, parkingLotId, startTime, endTime } =
    req.body;

  // find and check if user own this booking
  const existingBooking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  if (existingBooking.userId !== userId) {
    return res
      .status(403)
      .json(formatError("You are not authorized to update this booking"));
  }

  // prevent user from update COMPLETED/CANCELLED booking
  if (
    existingBooking.status === "COMPLETED" ||
    existingBooking.status === "CANCELLED"
  ) {
    return res
      .status(400)
      .json(formatError("Cannot update a completed or cancelled booking"));
  }

  const updateData = { vehicleId, parkingLotId, startTime, endTime };
  const { vehicle, parkingSlot, parkingLot } = await getEffectiveBookingState(
    prisma,
    existingBooking,
    { vehicleId, parkingSlotId, parkingLotId },
    userId,
  );

  await assertVehicleAvailableForActiveUse(prisma, {
    vehicleId: vehicle.id,
    excludeBookingId: existingBooking.id,
  });
  // `excludeBookingId` lets the current booking update itself without being
  // mistaken for a conflict when the vehicle stays the same.

  // Recalculate cost if time changed
  if (startTime || endTime || vehicleId || parkingLotId) {
    updateData.estimatedCost = await calculateNewCost(
      startTime || existingBooking.startTime,
      endTime || existingBooking.endTime,
      {
        ...existingBooking,
        vehicleId: vehicle.id,
        parkingLotId: parkingLot.id,
      },
    );
  }

  updateData.monthlyPassId = await resolveMonthlyPassForBooking(
    prisma,
    existingBooking,
    updateData,
  );

  // If the user is changing their parking slot, swap slot reservations atomically
  const isChangingSlot =
    parkingSlotId && parkingSlotId !== existingBooking.parkingSlotId;
  if (isChangingSlot) {
    const booking = await prisma.$transaction(async (tx) => {
      const newSlot = await tx.parkingSlot.findUnique({
        where: { id: parkingSlotId },
      });
      if (!newSlot) {
        throw new HttpError(404, "Parking slot not found");
      }
      if (newSlot.status !== "AVAILABLE") {
        throw new HttpError(400, "The new parking slot is not available");
      }
      if (newSlot.parkingLotId !== parkingLot.id) {
        throw new HttpError(400, "Parking lot and parking slot do not match");
      }
      if (vehicle.vehicleType !== newSlot.vehicleType) {
        throw new HttpError(
          400,
          "Vehicle type and parking slot type do not match",
        );
      }
      // Slot swaps must be atomic so we never leave both slots reserved
      // or accidentally free the old slot before securing the new one.
      // Release old slot
      await tx.parkingSlot.update({
        where: { id: existingBooking.parkingSlotId },
        data: { status: "AVAILABLE" },
      });
      // Reserve new slot
      await tx.parkingSlot.update({
        where: { id: parkingSlotId },
        data: { status: "RESERVED" },
      });
      // Update booking
      return tx.booking.update({
        where: { id },
        data: { ...updateData, parkingSlotId },
        include: bookingInclude,
      });
    });
    return res
      .status(200)
      .json(formatSuccess({ booking: formatBooking(booking) }));
  }

  const booking = await prisma.booking.update({
    where: { id },
    data: updateData,
    include: bookingInclude,
  });
  return res
    .status(200)
    .json(formatSuccess({ booking: formatBooking(booking) }));
});

const updateBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { vehicleId, parkingSlotId, parkingLotId, startTime, endTime } =
    req.body;

  const existingBooking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  const updateData = { vehicleId, parkingLotId, startTime, endTime };
  const { vehicle, parkingLot } = await getEffectiveBookingState(
    prisma,
    existingBooking,
    { vehicleId, parkingSlotId, parkingLotId },
  );

  await assertVehicleAvailableForActiveUse(prisma, {
    vehicleId: vehicle.id,
    excludeBookingId: existingBooking.id,
  });
  // Admin edits must obey the same single-active-vehicle rule as user edits.

  // Recalculate cost if time changed
  if (startTime || endTime || vehicleId || parkingLotId) {
    updateData.estimatedCost = await calculateNewCost(
      startTime || existingBooking.startTime,
      endTime || existingBooking.endTime,
      {
        ...existingBooking,
        vehicleId: vehicle.id,
        parkingLotId: parkingLot.id,
      },
    );
  }

  updateData.monthlyPassId = await resolveMonthlyPassForBooking(
    prisma,
    existingBooking,
    updateData,
  );

  const isChangingSlot =
    parkingSlotId && parkingSlotId !== existingBooking.parkingSlotId;
  if (isChangingSlot) {
    const booking = await prisma.$transaction(async (tx) => {
      const newSlot = await tx.parkingSlot.findUnique({
        where: { id: parkingSlotId },
      });
      if (!newSlot) {
        throw new HttpError(404, "Parking slot not found");
      }
      if (newSlot.status !== "AVAILABLE") {
        throw new HttpError(400, "The new parking slot is not available");
      }
      if (newSlot.parkingLotId !== parkingLot.id) {
        throw new HttpError(400, "Parking lot and parking slot do not match");
      }
      if (vehicle.vehicleType !== newSlot.vehicleType) {
        throw new HttpError(
          400,
          "Vehicle type and parking slot type do not match",
        );
      }

      await tx.parkingSlot.update({
        where: { id: existingBooking.parkingSlotId },
        data: { status: "AVAILABLE" },
      });
      await tx.parkingSlot.update({
        where: { id: parkingSlotId },
        data: { status: "RESERVED" },
      });

      return tx.booking.update({
        where: { id },
        data: { ...updateData, parkingSlotId },
        include: bookingInclude,
      });
    });

    return res
      .status(200)
      .json(formatSuccess({ booking: formatBooking(booking) }));
  }

  const booking = await prisma.booking.update({
    where: { id },
    data: updateData,
    include: bookingInclude,
  });

  return res
    .status(200)
    .json(formatSuccess({ booking: formatBooking(booking) }));
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const existingBooking = await prisma.booking.findUnique({
    where: { id },
    include: { vehicle: true, parkingLot: true },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  // Guard: only allow valid status transitions
  const allowed = VALID_TRANSITIONS[existingBooking.status];
  if (!allowed || !allowed.includes(status)) {
    return res
      .status(400)
      .json(
        formatError(
          `Cannot transition from ${existingBooking.status} to ${status}. Allowed: ${allowed.join(", ") || "none (terminal state)"}`,
        ),
      );
  }

  // Build all prisma operations for a single transaction
  const operations = [];

  // 1. Update booking status
  operations.push(
    prisma.booking.update({
      where: { id },
      data: { status },
      include: { vehicle: true, parkingLot: true },
    }),
  );

  // 2. If completed or cancelled, release the parking slot
  if (status === "COMPLETED" || status === "CANCELLED") {
    operations.push(
      prisma.parkingSlot.update({
        where: { id: existingBooking.parkingSlotId },
        data: { status: "AVAILABLE" },
      }),
    );
  }

  // Execute everything atomically
  const results = await prisma.$transaction(operations);
  const booking = results[0]; // first operation is always the booking update

  return res
    .status(200)
    .json(formatSuccess({ booking: formatBooking(booking) }));
});

const deleteBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const existingBooking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  // EDGE CASE BUG FIX: Prevent deleting active bookings directly.
  if (
    existingBooking.status === "CONFIRMED" ||
    existingBooking.status === "PENDING_PAYMENT"
  ) {
    return res
      .status(400)
      .json(
        formatError(
          `Cannot delete a booking with status ${existingBooking.status}. Cancel it first.`,
        ),
      );
  }

  // If the booking was COMPLETED or CANCELLED, it no longer "owns" the slot, so we shouldn't force the slot to AVAILABLE
  // We just delete the booking.
  const booking = await prisma.booking.delete({
    where: { id },
  });

  return res.status(200).json(formatSuccess({ booking }));
});

const cancelOwnBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  // check if user own this booking
  const existingBooking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  if (existingBooking.userId !== userId) {
    return res
      .status(403)
      .json(formatError("You are not authorized to cancel this booking"));
  }

  // Allow cancellation of PENDING_PAYMENT and CONFIRMED bookings
  if (
    existingBooking.status !== "CONFIRMED" &&
    existingBooking.status !== "PENDING_PAYMENT"
  ) {
    return res
      .status(400)
      .json(
        formatError(
          `Cannot cancel a booking with status ${existingBooking.status}`,
        ),
      );
  }

  const { booking, updatedSlot, updatedPayment } = await prisma.$transaction(
    async (tx) => {
      const booking = await tx.booking.update({
        where: { id },
        data: {
          status: "CANCELLED",
        },
        include: bookingInclude,
      });

      const updatedSlot = await tx.parkingSlot.update({
        where: { id: existingBooking.parkingSlotId },
        data: {
          status: "AVAILABLE",
        },
      });

      const existingPayment = await tx.payment.findUnique({
        where: { bookingId: id },
      });

      let updatedPayment = null;
      if (existingPayment && existingPayment.status === "PENDING") {
        updatedPayment = await tx.payment.update({
          where: { id: existingPayment.id },
          data: {
            status: "FAILED",
          },
        });
      }

      return { booking, updatedSlot, updatedPayment };
    },
  );

  const responseData = {
    booking: formatBooking(booking),
    parkingSlot: updatedSlot,
  };
  if (updatedPayment) {
    responseData.payment = updatedPayment;
  }

  return res.status(200).json(formatSuccess(responseData));
});

export {
  createBooking,
  getOwnBooking,
  getAllBooking,
  getBookingById,
  updateOwnBooking,
  updateBookingById,
  updateBookingStatus,
  deleteBookingById,
  cancelOwnBooking,
};
