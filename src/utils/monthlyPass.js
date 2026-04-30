export const monthlyPassInclude = {
  payment: {
    select: {
      id: true,
      amount: true,
      method: true,
      status: true,
    },
  },
};

export const findEligibleMonthlyPass = async (
  db,
  { userId, vehicleType, startTime, endTime, monthlyPassId = null },
) => {
  const where = {
    userId,
    vehicleType,
    status: "ACTIVE",
    payment: {
      is: {
        status: "SUCCESS",
      },
    },
  };

  if (monthlyPassId) {
    where.id = monthlyPassId;
  }
  if (startTime) {
    where.startDate = { lte: new Date(startTime) };
  }
  if (endTime) {
    where.endDate = { gte: new Date(endTime) };
  }

  return db.monthlyPass.findFirst({
    where,
    include: monthlyPassInclude,
  });
};

export const ensureMonthlyPassAvailableForCheckIn = async (db, monthlyPassId) => {
  const activeUsage = await db.parkingRecord.findFirst({
    where: {
      monthlyPassId,
      status: "CHECKED_IN",
    },
    select: {
      id: true,
    },
  });

  return !activeUsage;
};
