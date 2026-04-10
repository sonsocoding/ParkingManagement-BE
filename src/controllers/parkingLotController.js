import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const getAllLot = asyncHandler(async (req, res) => {
  const { name, address, totalSlots, lotType, zones, carHourlyRate, motorbikeHourlyRate } =
    req.body;
  const userId = req.user.id;

  const parkingLot = await prisma.parkingLot.create({
    data: {
      name,
      address,
      totalSlots,
      lotType,
      zones,
      motorbikeHourlyRate,
      carHourlyRate,
      userId,
    },
  });

  res.status(201).json(formatSuccess({ parkingLot }));
});
