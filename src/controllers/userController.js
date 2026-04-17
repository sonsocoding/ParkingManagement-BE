import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const getOwnProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    omit: { password: true },
  });

  return res.status(200).json(formatSuccess({ user }));
});

const updateOwnProfile = asyncHandler(async (req, res) => {
  const { fullName, email, phone } = req.body;
  const userId = req.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    omit: { password: true },
  });

  if (!user) {
    return res.status(404).json(formatError("User not found"));
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      fullName,
      email,
      phone,
    },
  });

  return res.status(200).json(formatSuccess({ updatedUser }));
});

const deleteOwnProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const deletedUser = await prisma.user.findUnique({
    where: { id: userId },
    omit: { password: true },
  });

  if (!deletedUser) {
    return res.status(404).json(formatError("User not found"));
  }

  // EDGE CASE BUG FIX: Prevent deleting user if they have active engagements.
  const activeBookings = await prisma.booking.findFirst({
    where: { 
      userId: userId,
      status: { in: ["PENDING_PAYMENT", "CONFIRMED"] }
    }
  });
  if (activeBookings) {
    return res.status(400).json(formatError("Cannot delete account because you have active bookings. Please cancel them first."));
  }

  const activeRecords = await prisma.parkingRecord.findFirst({
    where: {
      userId: userId,
      status: "CHECKED_IN"
    }
  });
  if (activeRecords) {
    return res.status(400).json(formatError("Cannot delete account because you have vehicles currently checked in at a parking lot."));
  }

  await prisma.user.delete({
    where: { id: userId },
  });

  return res.status(200).json(formatSuccess({ deletedUser }));
});

const createUser = asyncHandler(async (req, res) => {
  const { fullName, email, phone, password, role } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      phone,
      password: hashedPassword,
      role,
    },
    omit: { password: true },
  });

  return res.status(201).json(formatSuccess({ user }));
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany({ omit: { password: true } });

  return res.status(200).json(formatSuccess({ users }));
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone, role } = req.body;

  const user = await prisma.user.findUnique({
    where: { id },
    omit: { password: true },
  });

  if (!user) {
    return res.status(404).json(formatError("User not found"));
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      fullName,
      email,
      phone,
      role,
    },
  });

  return res.status(200).json(formatSuccess({ updatedUser }));
});

const deleteUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedUser = await prisma.user.findUnique({
    where: { id },
    omit: { password: true },
  });

  if (!deletedUser) {
    return res.status(404).json(formatError("User not found"));
  }

  // EDGE CASE BUG FIX: Prevent deleting user if they have active engagements.
  const activeBookings = await prisma.booking.findFirst({
    where: { 
      userId: id,
      status: { in: ["PENDING_PAYMENT", "CONFIRMED"] }
    }
  });
  if (activeBookings) {
    return res.status(400).json(formatError("Cannot delete user because they have active bookings."));
  }

  const activeRecords = await prisma.parkingRecord.findFirst({
    where: {
      userId: id,
      status: "CHECKED_IN"
    }
  });
  if (activeRecords) {
    return res.status(400).json(formatError("Cannot delete user because they have vehicles currently checked in."));
  }

  await prisma.user.delete({
    where: { id },
  });

  return res.status(200).json(formatSuccess({ deletedUser }));
});

export {
  getOwnProfile,
  updateOwnProfile,
  deleteOwnProfile,
  createUser,
  getAllUsers,
  updateUser,
  deleteUserById,
};
