import { prisma } from "../config/db.js";

const createVehicle = async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const userId = req.user.id;

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
    console.error("createVehicle error:", err);
    return res.status(500).json({ message: "Failed to create vehicle" });
  }
};

const getOwnVehicle = async (req, res) => {
  const userId = req.user.id;

  try {
    const vehicle = await prisma.vehicle.findMany({
      where: { userId },
    });

    return res.status(200).json({
      data: { vehicle },
    });
  } catch (err) {
    console.error("getOwnVehicle error:", err);
    return res.status(500).json({ message: "Failed to get vehicles" });
  }
};

const updateOwnVehicle = async (req, res) => {
  const { plateNumber, vehicleType, color } = req.body;
  const userId = req.user.id;
  const id = req.params.id;

  try {
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
  } catch (err) {
    console.error("updateOwnVehicle error:", err);
    return res.status(500).json({ message: "Failed to update vehicle" });
  }
};

const deleteOwnVehicle = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  try {
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
  } catch (err) {
    console.error("deleteOwnVehicle error:", err);
    return res.status(500).json({ message: "Failed to delete vehicle" });
  }
};

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await prisma.vehicle.findMany();

    return res.status(200).json({
      data: { vehicles },
    });
  } catch (err) {
    console.error("getAllVehicles error:", err);
    return res.status(500).json({ message: "Failed to get vehicles" });
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
    console.error("getVehicleById error:", err);
    return res.status(500).json({ message: "Failed to get vehicle" });
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
    console.error("updateVehicleById error:", err);
    return res.status(500).json({ message: "Failed to update vehicle" });
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
    console.error("deleteVehicleById error:", err);
    return res.status(500).json({ message: "Failed to delete vehicle" });
  }
};

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
