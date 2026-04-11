import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const createSlot = asyncHandler(async (req, res) => {
  const { parkingLotId, zoneId, slotNumbers, vehicleType } = req.body;

  const slotsData = slotNumbers.map(slotNumber => ({
    parkingLotId,
    zoneId,
    slotNumber,
    vehicleType,
  }));

  const createdSlots = await prisma.parkingSlot.createMany({
    data: slotsData,
    skipDuplicates: true,
  });

  res.status(201).json(formatSuccess({ count: createdSlots.count }));
});

const getByLotId = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const parkingSlot = await prisma.parkingSlot.findMany({
    where: { parkingLotId: id },
  });

  res.status(200).json(formatSuccess({ parkingSlot }));
});

const updateSlotStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const parkingSlot = await prisma.parkingSlot.findUnique({
    where: { id },
  });

  if (!parkingSlot) {
    return res.status(404).json(formatError("Parking slot not found"));
  }

  const currentStatus = parkingSlot.status;

  // Validate status transitions: AVAILABLE ↔ RESERVED ↔ OCCUPIED, AVAILABLE ↔ MAINTENANCE
  const isValidTransition = () => {
    // If status isn't changing, it's valid
    if (currentStatus === status) return true;

    switch (currentStatus) {
      case "AVAILABLE":
        return ["RESERVED", "MAINTENANCE"].includes(status);
      case "RESERVED":
        return ["AVAILABLE", "OCCUPIED"].includes(status);
      case "OCCUPIED":
        return ["RESERVED", "AVAILABLE"].includes(status); // Usually occupied -> available during checkout
      case "MAINTENANCE":
        return ["AVAILABLE"].includes(status);
      default:
        return false;
    }
  };

  if (!isValidTransition()) {
    return res.status(400).json(formatError(`Invalid status transition from ${currentStatus} to ${status}`));
  }

  const updatedSlot = await prisma.parkingSlot.update({
    where: { id },
    data: { status },
  });

  return res.status(200).json(formatSuccess({ updatedSlot }));
});

const updateSlot = asyncHandler(async (req, res) => {
  const { parkingLotId, zoneId, slotNumber, vehicleType } = req.body;
  const { id } = req.params;

  const parkingSlot = await prisma.parkingSlot.findUnique({
    where: { id },
  });

  if (!parkingSlot) {
    return res.status(404).json(formatError("Parking slot not found"));
  }

  const updatedSlot = await prisma.parkingSlot.update({
    where: { id },
    data: {
      parkingLotId,
      zoneId,
      slotNumber,
      vehicleType,
    },
  });

  return res.status(200).json(formatSuccess({ updatedSlot }));
});

const deleteSlot = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedSlot = await prisma.parkingSlot.findUnique({
    where: { id },
  });

  if (!deletedSlot) {
    return res.status(404).json(formatError("Parking slot not found"));
  }

  await prisma.parkingSlot.delete({
    where: { id },
  });

  return res.status(200).json(formatSuccess({ deletedSlot }));
});

export { createSlot, getByLotId, updateSlotStatus, updateSlot, deleteSlot };
