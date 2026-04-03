import { prisma } from "../config/db.js";

const getBlocks = async (req, res) => {
  const userId = req.user.id;

  try {
    const blocks = await prisma.block.findMany({
      where: { userId },
      include: {
        tasks: {
          orderBy: { order: 'asc' }
        }
      },
      orderBy: { startTime: 'asc' }
    });

    res.status(200).json({
      data: { blocks },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error getting time blocks with error: ${err}` });
  }
};

const createBlock = async (req, res) => {
  const { title, startTime, endTime, date } = req.body;
  const userId = req.user.id;

  // 1. Convert strings to Date objects for precise comparison
  const start = new Date(startTime);
  const end = new Date(endTime);

  // 2. Validate chronological sequence
  if (end <= start) {
    return res.status(400).json({
      message: "End time must be larger than start time",
    });
  }

  try {
    const block = await prisma.block.create({
      data: {
        title,
        startTime,
        endTime,
        date,
        userId,
      },
    });

    res.status(201).json({
      data: { block },
    });
  } catch (err) {
    return res.status(404).json({ message: `Error creating time block with error: ${err}` });
  }
};

const updateBlock = async (req, res) => {
  const { title, startTime, endTime, date } = req.body;

  const id = req.params.id;

  try {
    // handling start time > end time bug
    const existingBlock = await prisma.block.findUnique({ where: { id } });

    if (!existingBlock) {
      return res.status(404).json({ message: "Time block not found" });
    }

    const finalStart = new Date(startTime || existingBlock.startTime);
    const finalEnd = new Date(endTime || existingBlock.endTime);

    if (finalStart > finalEnd) {
      return res.status(400).json({ message: "Start time must be smaller than end time" });
    }

    const updatedBlock = await prisma.block.update({
      where: { id },
      data: {
        title,
        startTime: finalStart,
        endTime: finalEnd,
        date,
      },
    });

    res.status(200).json({
      data: { updatedBlock },
    });
  } catch (err) {
    return res.status(401).json({ message: `Error updating time block with error: ${err}` });
  }
};

const deleteBlock = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.block.delete({
      where: { id },
    });

    res.status(204).json({ message: "Successfully delete this block" });
  } catch (err) {
    return res.status(401).json({ message: `Error deleting time block with error: ${err}` });
  }
};

export { createBlock, getBlocks, updateBlock, deleteBlock };
