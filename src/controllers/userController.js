import { prisma } from "../config/db.js";

const getUser = async (req, res) => {
  const { userId } = req.params;

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
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        priority,
        status,
        order,
      },
    });

    return res.status(200).json({
      data: { updatedTask },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error updating tasks with error: ${err}` });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id },
    });

    return res.status(204).json({ message: "Successfully delete this task" });
  } catch (err) {
    return res.status(404).json({ message: `Error deleting tasks with error: ${err}` });
  }
};

export { createTask, getTasks, updateTask, deleteTask };
