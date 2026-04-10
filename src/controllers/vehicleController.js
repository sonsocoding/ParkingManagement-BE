import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createVehicle = asyncHandler(async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const userId = req.user.id;

  const vehicle = await prisma.vehicle.findUnique({
    where: { plateNumber },
  });

  if (vehicle) {
    return res.status(409).json({ message: "Plate number already exists" });
  }

  const newVehicle = await prisma.vehicle.create({
    data: {
      plateNumber,
      vehicleType,
      color,
      userId,
    },
  });

  return res.status(201).json({
    data: { newVehicle },
  });
});

const getOwnVehicle = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const vehicle = await prisma.vehicle.findMany({
    where: { userId },
  });

  return res.status(200).json({
    data: { vehicle },
  });
});

const updateOwnVehicle = asyncHandler(async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const userId = req.user.id;
  const id = req.params.id;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }

  if (vehicle.userId !== userId) {
    return res.status(403).json({ message: "Forbidden: You are not the owner of this vehicle" });
  }

  const updatedVehicle = await prisma.vehicle.update({
    where: { id },
    data: {
      plateNumber,
      vehicleType,
      color,
    },
  });

  return res.status(200).json({
    data: { updatedVehicle },
  });
});

const deleteOwnVehicle = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }

  if (vehicle.userId !== userId) {
    return res.status(403).json({ message: "Forbidden: You are not the owner of this vehicle" });
  }

  const deletedVehicle = await prisma.vehicle.delete({
    where: { id },
  });

  return res.status(200).json({
    data: { deletedVehicle },
  });
});

const getAllVehicles = asyncHandler(async (req, res) => {
  const vehicles = await prisma.vehicle.findMany();

  return res.status(200).json({
    data: { vehicles },
  });
});

const getVehicleById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }

  return res.status(200).json({
    data: { vehicle },
  });
});

const updateVehicleById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { plateNumber, vehicleType, color } = req.body;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }

  const updatedVehicle = await prisma.vehicle.update({
    where: { id },
    data: {
      plateNumber,
      vehicleType,
      color,
    },
  });

  return res.status(200).json({
    data: { updatedVehicle },
  });
});

const deleteVehicleById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    return res.status(404).json({ message: "Vehicle not found" });
  }

  const deletedVehicle = await prisma.vehicle.delete({
    where: { id },
  });

  return res.status(200).json({
    data: { deletedVehicle },
  });
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
