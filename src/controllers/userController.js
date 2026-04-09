import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";

const getOwnProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      omit: { password: true },
    });

    return res.status(200).json({
      data: { user },
    });
  } catch (err) {
    console.error("getOwnProfile error:", err);
    return res.status(500).json({ message: "Failed to get profile" });
  }
};

const updateOwnProfile = async (req, res) => {
  const { fullName, email, phone } = req.body;
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      omit: { password: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        fullName,
        email,
        phone,
      },
    });

    return res.status(200).json({
      data: { updatedUser },
    });
  } catch (err) {
    console.error("updateOwnProfile error:", err);
    return res.status(500).json({ message: "Failed to update profile" });
  }
};

const deleteOwnProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const deletedUser = await prisma.user.findUnique({
      where: { id: userId },
      omit: { password: true },
    });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(200).json({ data: deletedUser });
  } catch (err) {
    console.error("deleteOwnProfile error:", err);
    return res.status(500).json({ message: "Failed to delete account" });
  }
};

const createUser = async (req, res) => {
  const { fullName, email, phone, password, role } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
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

    return res.status(201).json({
      data: { user },
    });
  } catch (err) {
    console.error("createUser error:", err);
    return res.status(500).json({ message: "Failed to create user" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({ omit: { password: true } });

    return res.status(200).json({
      data: { users },
    });
  } catch (err) {
    console.error("getAllUsers error:", err);
    return res.status(500).json({ message: "Failed to get users" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone, role } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      omit: { password: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
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

    return res.status(200).json({
      data: { updatedUser },
    });
  } catch (err) {
    console.error("updateUser error:", err);
    return res.status(500).json({ message: "Failed to update user" });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await prisma.user.findUnique({
      where: { id },
      omit: { password: true },
    });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    await prisma.user.delete({
      where: { id },
    });

    return res.status(200).json({ data: deletedUser });
  } catch (err) {
    console.error("deleteUserById error:", err);
    return res.status(500).json({ message: "Failed to delete user" });
  }
};

export {
  getOwnProfile,
  updateOwnProfile,
  deleteOwnProfile,
  createUser,
  getAllUsers,
  updateUser,
  deleteUserById,
};
