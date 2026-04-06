import { prisma } from "../config/db.js";

const getUser = async (req, res) => {
  const { userId } = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return res.status(200).json({
      data: { user },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error getting user with error: ${err}` });
  }
};

const updateUser = async (req, res) => {
  const { fullName, email, phone } = req.body;
  const { userId } = req.user.id;

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
    return res.status(404).json({ message: `Error updating user with error: ${err}` });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.user.id;

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(204).json({ message: "Successfully delete this user" });
  } catch (err) {
    return res.status(404).json({ message: `Error deleting user with error: ${err}` });
  }
};

export { getUser, updateUser, deleteUser };
