import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const createVehicle = asyncHandler(async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const userId = req.user.id;

  const existingVehicle = await prisma.vehicle.findUnique({
    where: { plateNumber },
  });

  if (existingVehicle) {
    return res.status(409).json(formatError("Plate number already exists"));
  }

  const vehicle = await prisma.vehicle.create({
    data: {
      plateNumber,
      vehicleType,
      color,
      userId,
    },
  });

  return res.status(201).json(formatSuccess({ vehicle }));
});

const getOwnVehicle = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const vehicles = await prisma.vehicle.findMany({
    where: { userId },
  });

  return res.status(200).json(formatSuccess({ vehicles }));
});

const updateOwnVehicle = asyncHandler(async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const userId = req.user.id;
  const id = req.params.id;

  const existingVehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!existingVehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  if (existingVehicle.userId !== userId) {
    return res.status(403).json(formatError("Forbidden: You are not the owner of this vehicle"));
  }

  const vehicle = await prisma.vehicle.update({
    where: { id },
    data: {
      plateNumber,
      vehicleType,
      color,
    },
  });

  return res.status(200).json(formatSuccess({ vehicle }));
});

const deleteOwnVehicle = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  const existingVehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!existingVehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  if (existingVehicle.userId !== userId) {
    return res.status(403).json(formatError("Forbidden: You are not the owner of this vehicle"));
  }

  // EDGE CASE BUG FIX: Prevent deleting a vehicle if it has active bookings or is currently parked.
  const activeBookings = await prisma.booking.findFirst({
    where: { 
      vehicleId: id,
      status: { in: ["PENDING_PAYMENT", "CONFIRMED"] }
    }
  });
  if (activeBookings) {
    return res.status(400).json(formatError("Cannot delete vehicle because it has active bookings."));
  }

  const activeRecords = await prisma.parkingRecord.findFirst({
    where: {
      vehicleId: id,
      status: "CHECKED_IN"
    }
  });
  if (activeRecords) {
    return res.status(400).json(formatError("Cannot delete vehicle because it is currently checked in at a parking lot."));
  }

  await prisma.vehicle.delete({
    where: { id },
  });

  return res.status(200).json(formatSuccess({ vehicle }));
});

const getAllVehicles = asyncHandler(async (req, res) => {
  const vehicles = await prisma.vehicle.findMany();

  return res.status(200).json(formatSuccess({ vehicles }));
});

const getVehicleById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  return res.status(200).json(formatSuccess({ vehicle }));
});

const updateVehicleById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { plateNumber, vehicleType, color } = req.body;

  const existingVehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!existingVehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  const vehicle = await prisma.vehicle.update({
    where: { id },
    data: {
      plateNumber,
      vehicleType,
      color,
    },
  });

  return res.status(200).json(formatSuccess({ vehicle }));
});

const deleteVehicleById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    return res.status(404).json(formatError("Vehicle not found"));
  }

  // EDGE CASE BUG FIX: Prevent deleting a vehicle if it has active bookings or is currently parked.
  const activeBookings = await prisma.booking.findFirst({
    where: { 
      vehicleId: id,
      status: { in: ["PENDING_PAYMENT", "CONFIRMED"] }
    }
  });
  if (activeBookings) {
    return res.status(400).json(formatError("Cannot delete vehicle because it has active bookings."));
  }

  const activeRecords = await prisma.parkingRecord.findFirst({
    where: {
      vehicleId: id,
      status: "CHECKED_IN"
    }
  });
  if (activeRecords) {
    return res.status(400).json(formatError("Cannot delete vehicle because it is currently checked in at a parking lot."));
  }

  await prisma.vehicle.delete({
    where: { id },
  });

  return res.status(200).json(formatSuccess({ vehicle }));
});

export {
  createVehicle,
  getOwnVehicle,
  updateOwnVehicle,
  deleteOwnVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicleById,
  deleteVehicleById,
};
