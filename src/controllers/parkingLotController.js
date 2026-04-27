import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const lotWithStatusCounts = {
  include: {
    slots: {
      select: {
        status: true,
      },
    },
  },
};

const enrichLot = (lot) => {
  if (!lot) return null;

  const slots = Array.isArray(lot.slots) ? lot.slots : [];

  return {
    ...lot,
    availableSlots: slots.filter((slot) => slot.status === "AVAILABLE").length,
    occupiedSlots: slots.filter((slot) => slot.status === "OCCUPIED").length,
    reservedSlots: slots.filter((slot) => slot.status === "RESERVED").length,
  };
};

const createLot = asyncHandler(async (req, res) => {
  const { name, address, totalSlots, lotType, zones, carHourlyRate, motorbikeHourlyRate } =
    req.body;

  const parkingLot = await prisma.parkingLot.create({
    data: {
      name,
      address,
      totalSlots,
      lotType,
      zones,
      motorbikeHourlyRate,
      carHourlyRate,
    },
  });

  res.status(201).json(formatSuccess({ parkingLot }));
});

const getAllLots = asyncHandler(async (req, res) => {
  const parkingLots = await prisma.parkingLot.findMany(lotWithStatusCounts);
  const enrichedLots = parkingLots.map(enrichLot);

  res.status(200).json(formatSuccess({ parkingLots: enrichedLots }));
});

const getLotById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const parkingLot = await prisma.parkingLot.findUnique({
    where: { id },
    ...lotWithStatusCounts,
  });

  const enrichedLot = enrichLot(parkingLot);

  res.status(200).json(formatSuccess({ parkingLot: enrichedLot }));
});

const updateLot = asyncHandler(async (req, res) => {
  const { name, address, totalSlots, lotType, zones, carHourlyRate, motorbikeHourlyRate } =
    req.body;

  const { id } = req.params;

  const existingParkingLot = await prisma.parkingLot.findUnique({
    where: { id },
  });

  if (!existingParkingLot) {
    return res.status(404).json(formatError("Parking lot not found"));
  }

  const parkingLot = await prisma.parkingLot.update({
    where: { id },
    data: {
      name,
      address,
      totalSlots,
      lotType,
      zones,
      carHourlyRate,
      motorbikeHourlyRate,
    },
  });
  return res.status(200).json(formatSuccess({ parkingLot }));
});

const deleteLot = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const parkingLot = await prisma.parkingLot.findUnique({
    where: { id },
    include: {
      slots: true, // Need to check slot statuses before deleting
    }
  });

  if (!parkingLot) {
    return res.status(404).json(formatError("Parking lot not found"));
  }

  // EDGE CASE BUG FIX: Check if the lot has any slots that are OCCUPIED or RESERVED.
  // Deleting the lot cascades down and deletes slots -> bookings -> records -> payments.
  const hasActiveSlots = parkingLot.slots.some(
    (slot) => slot.status === "OCCUPIED" || slot.status === "RESERVED"
  );
  if (hasActiveSlots) {
    return res.status(400).json(
      formatError("Cannot delete this parking lot because it has active vehicles parked or reserved. Clear all slots first.")
    );
  }

  await prisma.parkingLot.delete({
    where: { id },
  });

  return res.status(200).json(formatSuccess({ parkingLot }));
});

export { createLot, getAllLots, getLotById, updateLot, deleteLot };
