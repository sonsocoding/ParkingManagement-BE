import { prisma } from "../config/db.js";

const createVehicle = async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const { userId } = req.user.id;

  try {
    const vehicle = await prisma.vehicle.create({
      data: {
        plateNumber,
        vehicleType,
        color,
        userId,
      },
    });

    return res.status(201).json({
      data: { vehicle },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error creating vehicle with error: ${err}` });
  }
};

const getOwnVehicle = async (req, res) => {
  const { userId } = req.user.id;

  try {
    const vehicle = await prisma.vehicle.findMany({
      where: { userId },
    });

    return res.status(200).json({
      data: { vehicle },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error getting vehicle with error: ${err}` });
  }
};

const updateOwnVehicle = async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const { userId } = req.user.id;

  try {
    const vehicle = await prisma.vehicle.findUnique({
      where: { userId },
    });

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    const updatedVehicle = await prisma.vehicle.update({
      where: { userId },
      data: {
        plateNumber,
        vehicleType,
        color,
      },
    });

    return res.status(200).json({
      data: { updatedVehicle },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error updating vehicle with error: ${err}` });
  }
};

const deleteOwnVehicle = async (req, res) => {
  const { userId } = req.user.id;

  try {
    const vehicle = await prisma.vehicle.findUnique({
      where: { userId },
    });

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    const deletedVehicle = await prisma.vehicle.delete({
      where: { userId },
    });

    return res.status(200).json({
      data: { deletedVehicle },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error deleting vehicle with error: ${err}` });
  }
};

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await prisma.vehicle.findMany();

    return res.status(200).json({
      data: { vehicles },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error getting vehicles with error: ${err}` });
  }
};

const getVehicleById = async (req, res) => {
  const { id } = req.params;

  try {
    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
    });

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    return res.status(200).json({
      data: { vehicle },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error getting vehicle with error: ${err}` });
  }
};

const updateVehicleById = async (req, res) => {
  const { id } = req.params;
  const { plateNumber, vehicleType, color } = req.body;

  try {
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
  } catch (err) {
    return res.status(404).json({ message: `Error updating vehicle with error: ${err}` });
  }
};

const deleteVehicleById = async (req, res) => {
  const { id } = req.params;

  try {
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
  } catch (err) {
    return res.status(404).json({ message: `Error deleting vehicle with error: ${err}` });
  }
};

export default {
  createVehicle,
  getOwnVehicle,
  updateOwnVehicle,
  deleteOwnVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicleById,
  deleteVehicleById,
};
