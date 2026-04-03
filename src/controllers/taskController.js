import { prisma } from "../config/db.js";

const getTasks = async (req, res) => {
  const { blockId } = req.params;

  try {
    const tasks = await prisma.task.findMany({
      where: { blockId },
      orderBy: {
        order: "asc",
      },
    });

    return res.status(200).json({
      data: { tasks },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error getting tasks with error: ${err}` });
  }
};

const createTask = async (req, res) => {
  const { title, priority, status, order } = req.body;
  const { blockId } = req.params;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        priority,
        status,
        order,
        blockId,
      },
    });
    return res.status(201).json({
      data: { task },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error creating tasks with error: ${err}` });
  }
};

const updateTask = async (req, res) => {
  const { title, priority, status, order } = req.body;
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
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

const deleteTask = async (req, res) => {
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
