import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

// Valid status transitions: currentStatus -> [allowed next statuses]
const VALID_TRANSITIONS = {
  PENDING: ["CONFIRMED", "CANCELLED"],
  CONFIRMED: ["COMPLETED", "CANCELLED"],
  COMPLETED: [], // terminal state
  CANCELLED: [], // terminal state
};

// Helper: recalculate estimated cost from booking's related data
const calculateNewCost = async (startTime, endTime, existingBooking) => {
  const [parkingLot, vehicle] = await Promise.all([
    prisma.parkingLot.findUnique({ where: { id: existingBooking.parkingLotId } }),
    prisma.vehicle.findUnique({ where: { id: existingBooking.vehicleId } }),
  ]);

  const hours = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60);
  const rate =
    vehicle.vehicleType === "CAR" ? parkingLot.carHourlyRate : parkingLot.motorbikeHourlyRate;
  return Number(rate) * hours;
};

const createBooking = asyncHandler(async (req, res) => {
  const { vehicleId, parkingSlotId, parkingLotId, startTime, endTime } = req.body;
  const userId = req.user.id;

  // check if parking slot is available
  const parkingSlot = await prisma.parkingSlot.findUnique({
    where: { id: parkingSlotId },
  });

  if (!parkingSlot) {
    return res.status(404).json(formatError("Parking slot not found"));
  }

  if (parkingSlot.status !== "AVAILABLE") {
    return res.status(400).json(formatError("Parking slot is not available"));
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

  // find vehicle, check if user owns it
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: vehicleId },
  });

  if (!vehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  if (vehicle.userId !== userId) {
    return res.status(403).json(formatError("This is not your vehicle"));
  }

  const hours = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60);
  const estimatedCost =
    (vehicle.vehicleType === "CAR" ? parkingLot.carHourlyRate : parkingLot.motorbikeHourlyRate) *
    hours;

  // make booking and update slot status sync
  const [booking, updatedSlot] = await prisma.$transaction([
    prisma.booking.create({
      data: {
        userId,
        vehicleId,
        parkingSlotId,
        parkingLotId,
        startTime,
        endTime,
        estimatedCost,
        status: "PENDING",
      },
    }),

    // change slot status to reserved
    prisma.parkingSlot.update({
      where: { id: parkingSlotId },
      data: {
        status: "RESERVED",
      },
    }),
  ]);

  return res.status(201).json(formatSuccess({ booking, updatedSlot }));
});

const getOwnBooking = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const bookings = await prisma.booking.findMany({
    where: { userId },
    omit: { userId: true },
  });

  return res.status(200).json(formatSuccess({ bookings }));
});

const getAllBooking = asyncHandler(async (req, res) => {
  const bookings = await prisma.booking.findMany();

  return res.status(200).json(formatSuccess({ bookings }));
});

const getBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!booking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  return res.status(200).json(formatSuccess({ booking }));
});

const updateOwnBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { vehicleId, parkingSlotId, parkingLotId, startTime, endTime } = req.body;

  // find and check if user own this booking
  const existingBooking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  if (existingBooking.userId !== userId) {
    return res.status(403).json(formatError("You are not authorized to update this booking"));
  }

  // prevent user from update COMPLETED/CANCELLED booking
  if (existingBooking.status === "COMPLETED" || existingBooking.status === "CANCELLED") {
    return res.status(400).json(formatError("Cannot update a completed or cancelled booking"));
  }

  const updateData = { vehicleId, parkingSlotId, parkingLotId, startTime, endTime };

  // Recalculate cost if time changed
  if (startTime || endTime) {
    updateData.estimatedCost = await calculateNewCost(
      startTime || existingBooking.startTime,
      endTime || existingBooking.endTime,
      existingBooking,
    );
  }

  const booking = await prisma.booking.update({
    where: { id },
    data: updateData,
  });
  return res.status(200).json(formatSuccess({ booking }));
});

const updateBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { vehicleId, parkingSlotId, parkingLotId, startTime, endTime } = req.body;

  const existingBooking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  const updateData = { vehicleId, parkingSlotId, parkingLotId, startTime, endTime };

  // Recalculate cost if time changed
  if (startTime || endTime) {
    updateData.estimatedCost = await calculateNewCost(
      startTime || existingBooking.startTime,
      endTime || existingBooking.endTime,
      existingBooking,
    );
  }

  const booking = await prisma.booking.update({
    where: { id },
    data: updateData,
  });

  return res.status(200).json(formatSuccess({ booking }));
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

  // 3. If completed, create a parking record with actual cost
  if (status === "COMPLETED") {
    const checkOut = new Date();
    const checkIn = new Date(existingBooking.startTime);
    let actualHours = (checkOut - checkIn) / (1000 * 60 * 60);
    if (actualHours < 0) actualHours = 0;

    const rate =
      existingBooking.vehicle.vehicleType === "CAR"
        ? existingBooking.parkingLot.carHourlyRate
        : existingBooking.parkingLot.motorbikeHourlyRate;
    const actualCost = Number(rate) * actualHours;

    operations.push(
      prisma.parkingRecord.create({
        data: {
          bookingId: existingBooking.id,
          parkingLotId: existingBooking.parkingLotId,
          parkingSlotId: existingBooking.parkingSlotId,
          vehicleId: existingBooking.vehicleId,
          checkIn,
          checkOut,
          actualCost,
          paymentStatus: "PENDING",
        },
      }),
    );
  }

  // Execute everything atomically
  const results = await prisma.$transaction(operations);
  const booking = results[0]; // first operation is always the booking update

  return res.status(200).json(formatSuccess({ booking }));
});

const deleteBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const existingBooking = await prisma.booking.findUnique({
    where: { id },
  });

  if (!existingBooking) {
    return res.status(404).json(formatError("Booking not found"));
  }

  // Release slot and delete booking atomically
  const [updatedSlot, booking] = await prisma.$transaction([
    prisma.parkingSlot.update({
      where: { id: existingBooking.parkingSlotId },
      data: { status: "AVAILABLE" },
    }),
    prisma.booking.delete({
      where: { id },
    }),
  ]);

  return res.status(200).json(formatSuccess({ booking, updatedSlot }));
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
    return res.status(403).json(formatError("You are not authorized to cancel this booking"));
  }

  // Only allow cancellation of PENDING or CONFIRMED bookings
  if (existingBooking.status !== "PENDING" && existingBooking.status !== "CONFIRMED") {
    return res
      .status(400)
      .json(formatError(`Cannot cancel a booking with status ${existingBooking.status}`));
  }

  const [booking, updatedSlot] = await prisma.$transaction([
    prisma.booking.update({
      where: { id },
      data: {
        status: "CANCELLED",
      },
      include: { parkingSlot: true },
    }),

    // change slot status to available
    prisma.parkingSlot.update({
      where: { id: existingBooking.parkingSlotId },
      data: {
        status: "AVAILABLE",
      },
    }),
  ]);

  return res.status(200).json(formatSuccess({ booking, updatedSlot }));
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
