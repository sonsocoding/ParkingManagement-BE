import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const parkingRecordInclude = {
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
    },
  },
};

const formatRecord = (record) => {
  if (!record) return null;
  return {
    ...record,
    slot: record.parkingSlot ?? record.slot ?? null,
  };
};

const formatRecords = (records) => records.map(formatRecord);

const checkIn = asyncHandler(async (req, res) => {
  const { vehicleId, parkingSlotId, parkingLotId, bookingId } = req.body;
  const userId = req.user.id;

  // check if parking slot exists
  const parkingSlot = await prisma.parkingSlot.findUnique({
    where: { id: parkingSlotId },
  });
  if (!parkingSlot) {
    return res.status(404).json(formatError("Parking slot not found"));
  }

  // Slot must be AVAILABLE for walk-ins, or RESERVED for pre-booked check-ins
  // (bookingId presence is what distinguishes these two paths)
  const isWalkIn = !req.body.bookingId;
  if (isWalkIn && parkingSlot.status !== "AVAILABLE") {
    return res.status(400).json(formatError("Parking slot is not available"));
  }
  if (!isWalkIn && parkingSlot.status !== "RESERVED" && parkingSlot.status !== "AVAILABLE") {
    return res.status(400).json(formatError("Parking slot is not available for check-in"));
  }

  // find parking lot, check if it matches with slot
  const parkingLot = await prisma.parkingLot.findUnique({
    where: { id: parkingLotId },
  });
  if (!parkingLot) {
    return res.status(404).json(formatError("Parking lot not found"));
  }
  if (parkingLot.id !== parkingSlot.parkingLotId) {
    return res.status(400).json(formatError("Parking lot and parking slot do not match"));
  }

  // find vehicle
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: vehicleId },
  });
  if (!vehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  // check if user owns vehicle
  if (vehicle.userId !== userId) {
    return res.status(403).json(formatError("This is not your vehicle"));
  }

  // check if vehicle is already checked in
  const existingRecord = await prisma.parkingRecord.findFirst({
    where: {
      vehicleId,
      status: "CHECKED_IN",
    },
  });

  // check if vehicle type match slot type
  if (vehicle.vehicleType !== parkingSlot.vehicleType) {
    return res.status(400).json(formatError("Vehicle type does not match slot type"));
  }
  if (existingRecord) {
    return res.status(400).json(formatError("Vehicle is already checked in"));
  }

  // If user has a booking, validate it and check if we need to free their original slot
  let oldSlotIdToFree = null;
  if (bookingId) {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });
    if (!booking) {
      return res.status(404).json(formatError("Booking not found"));
    }
    if (booking.userId !== userId) {
      return res.status(403).json(formatError("This is not your booking"));
    }

    // Only a CONFIRMED booking (slot reserved + payment settled) can be checked into
    if (booking.status !== "CONFIRMED") {
      return res
        .status(400)
        .json(
          formatError(
            `Booking status is '${booking.status}'. Only CONFIRMED bookings can be checked in.`,
          ),
        );
    }

    // [FLEXIBLE APPROACH] If they parked in a different slot, track the original slot to free it
    if (booking.parkingSlotId !== parkingSlotId) {
      oldSlotIdToFree = booking.parkingSlotId;
    }
  }

  // --- Monthly Pass check ---
  // If user has an ACTIVE monthly pass for this vehicle type, see if we can apply it.
  const activePass = await prisma.monthlyPass.findFirst({
    where: {
      userId,
      vehicleType: vehicle.vehicleType,
      status: "ACTIVE",
    },
  });

  let appliedMonthlyPassId = null;
  if (activePass) {
    // Check if the pass is CURRENTLY being used by another vehicle
    const passInUse = await prisma.parkingRecord.findFirst({
      where: {
        monthlyPassId: activePass.id,
        status: "CHECKED_IN",
      },
    });
    if (!passInUse) {
      // The pass is free to use right now! Apply it.
      appliedMonthlyPassId = activePass.id;
    }
  }

  const operations = [
    // 1. Create parking record
    prisma.parkingRecord.create({
      data: {
        vehicleId,
        parkingSlotId,
        parkingLotId,
        userId,
        checkInTime: new Date(),
        status: "CHECKED_IN",
        bookingId,
        monthlyPassId: appliedMonthlyPassId,
      },
    }),
    // 2. Update the NEW slot status to occupied
    prisma.parkingSlot.update({
      where: { id: parkingSlotId },
      data: { status: "OCCUPIED" },
    }),
  ];

  if (bookingId) {
    // 3. Update the booking status to COMPLETED
    operations.push(
      prisma.booking.update({
        where: { id: bookingId },
        data: { status: "COMPLETED" },
      }),
    );
  }

  if (oldSlotIdToFree) {
    // 4. Free up the ORIGINAL slot that they reserved but didn't use
    operations.push(
      prisma.parkingSlot.update({
        where: { id: oldSlotIdToFree },
        data: { status: "AVAILABLE" },
      }),
    );
  }

  const results = await prisma.$transaction(operations);
  const parkingRecord = results[0];
  const updatedSlot = results[1];

  return res.status(201).json(
    formatSuccess({ parkingRecord, parkingSlot: updatedSlot }, "Check-in successful"),
  );
});

const checkOut = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  // check if parking record exist
  const parkingRecord = await prisma.parkingRecord.findUnique({
    where: { id },
  });

  if (!parkingRecord) {
    return res.status(404).json(formatError("Parking record not found"));
  }

  // check if user owns this vehicle
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: parkingRecord.vehicleId },
  });

  if (!vehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  if (vehicle.userId !== userId) {
    return res.status(403).json(formatError("This is not your vehicle"));
  }

  // check if parking lot exist
  const parkingLot = await prisma.parkingLot.findUnique({
    where: { id: parkingRecord.parkingLotId },
  });

  if (!parkingLot) {
    return res.status(404).json(formatError("Parking lot not found"));
  }

  // check if parking slot exist
  const parkingSlot = await prisma.parkingSlot.findUnique({
    where: { id: parkingRecord.parkingSlotId },
  });

  if (!parkingSlot) {
    return res.status(404).json(formatError("Parking slot not found"));
  }

  // check if parking slot and parking lot match
  if (parkingSlot.parkingLotId !== parkingLot.id) {
    return res.status(400).json(formatError("Parking slot and parking lot do not match"));
  }

  // check if parking record is already checked out
  if (parkingRecord.status === "CHECKED_OUT") {
    return res.status(400).json(formatError("Parking record is already checked out"));
  }

  // calculate actual cost
  const checkOutTime = new Date();
  const hours = (new Date(checkOutTime) - new Date(parkingRecord.checkInTime)) / (1000 * 60 * 60);
  const rate =
    vehicle.vehicleType === "CAR" ? parkingLot.carHourlyRate : parkingLot.motorbikeHourlyRate;

  let actualCost = Number(rate) * hours;
  if (parkingRecord.monthlyPassId) {
    actualCost = 0;
  }

  const { updatedRecord, updatedSlot, updatedPayment } = await prisma.$transaction(async (tx) => {
    const updatedRecord = await tx.parkingRecord.update({
      where: { id },
      data: {
        checkOutTime,
        status: "CHECKED_OUT",
        paymentStatus: "SUCCESS",
        actualCost,
      },
    });

    const updatedSlot = await tx.parkingSlot.update({
      where: { id: parkingRecord.parkingSlotId },
      data: { status: "AVAILABLE" },
    });

    let updatedPayment;

    // Booking checkout: finalize existing booking payment if present, otherwise create fallback.
    if (parkingRecord.bookingId) {
      const existingBookingPayment = await tx.payment.findFirst({
        where: { bookingId: parkingRecord.bookingId },
      });

      if (existingBookingPayment) {
        // Update amount only — preserve the original payment method (CASH/VNPAY/etc.)
        updatedPayment = await tx.payment.update({
          where: { id: existingBookingPayment.id },
          data: {
            amount: actualCost,
            status: "SUCCESS",
          },
        });
      } else {
        // Fallback: booking had no pre-created payment (edge case)
        updatedPayment = await tx.payment.create({
          data: {
            userId,
            bookingId: parkingRecord.bookingId,
            amount: actualCost,
            method: "CASH",
            status: "SUCCESS",
          },
        });
      }
    } else {
      // Walk-in checkout (no booking): attach/create payment on parking record.
      const existingRecordPayment = await tx.payment.findFirst({
        where: { parkingRecordId: id },
      });

      if (existingRecordPayment) {
        // Update amount only — preserve the original payment method
        updatedPayment = await tx.payment.update({
          where: { id: existingRecordPayment.id },
          data: {
            amount: actualCost,
            status: "SUCCESS",
          },
        });
      } else {
        // Walk-in with no pre-created payment: create one now
        updatedPayment = await tx.payment.create({
          data: {
            userId,
            parkingRecordId: id,
            amount: actualCost,
            method: "CASH",
            status: "SUCCESS",
          },
        });
      }
    }

    return { updatedRecord, updatedSlot, updatedPayment };
  });

  return res.status(200).json(
    formatSuccess(
      {
      parkingRecord: updatedRecord,
      parkingSlot: updatedSlot,
      payment: updatedPayment,
    },
    "Check-out successful",
  ),
  );
});

const getOwnRecord = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const parkingRecords = await prisma.parkingRecord.findMany({
    where: { userId },
    omit: { userId: true },
    include: parkingRecordInclude,
  });

  return res.status(200).json(formatSuccess({ parkingRecords: formatRecords(parkingRecords) }));
});

const getAllRecord = asyncHandler(async (req, res) => {
  const parkingRecords = await prisma.parkingRecord.findMany({
    include: parkingRecordInclude,
  });

  return res.status(200).json(formatSuccess({ parkingRecords: formatRecords(parkingRecords) }));
});

export { checkIn, checkOut, getOwnRecord, getAllRecord };
