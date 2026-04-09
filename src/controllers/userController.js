import { prisma } from "../config/db.js";

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
    return res.status(500).json({ message: `Error getting profile with error: ${err}` });
  }
};

const updateOwnProfile = async (req, res) => {
  const { fullName, email, phone } = req.body;
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
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
    return res.status(500).json({ message: `Error updating profile with error: ${err}` });
  }
};

const deleteOwnProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(200).json({ message: "Successfully delete your account" });
  } catch (err) {
    return res.status(500).json({ message: `Error deleting account with error: ${err}` });
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
    });

    return res.status(201).json({
      data: { user },
    });
  } catch (err) {
    return res.status(500).json({ message: `Error creating user with error: ${err}` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({ omit: { password: true } });

    return res.status(200).json({
      data: { users },
    });
  } catch (err) {
    return res.status(500).json({ message: `Error getting users with error: ${err}` });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone, role } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
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
    return res.status(500).json({ message: `Error updating user with error: ${err}` });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id },
    });

    return res.status(200).json({ message: "Successfully delete this user" });
  } catch (err) {
    return res.status(500).json({ message: `Error deleting user with error: ${err}` });
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
