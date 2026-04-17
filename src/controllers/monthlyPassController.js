import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

// System-wide monthly pass prices — admin can update these via PUT /api/monthly-passes/price.
// Stored in-memory; in production you'd store these in a DB settings table.
export const PASS_PRICES = {
  CAR: 1500000,       // 1,500,000 VND/month
  MOTORBIKE: 300000,  // 300,000 VND/month
};

// ─── USER ───────────────────────────────────────────────────────────────────

// POST /api/monthly-passes
// Register a new monthly pass. One pass per vehicle type per user (no duplicates).
// This pass can be used by any vehicle of the matched type owned by the user, but only one vehicle at a time.
const registerMonthlyPass = asyncHandler(async (req, res) => {
  const { vehicleType, months } = req.body;
  const userId = req.user.id;

  // Check: user must not already have an ACTIVE pass for this vehicle type
  const existingPass = await prisma.monthlyPass.findFirst({
    where: { userId, vehicleType, status: "ACTIVE" },
  });
  if (existingPass) {
    return res.status(409).json(
      formatError(`You already have an ACTIVE ${vehicleType} pass. Renew it instead.`)
    );
  }

  const pricePerMonth = PASS_PRICES[vehicleType];
  const totalPrice = pricePerMonth * months;
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + months);

  const { monthlyPass, payment } = await prisma.$transaction(async (tx) => {
    const monthlyPass = await tx.monthlyPass.create({
      data: {
        userId,
        vehicleType,
        startDate,
        endDate,
        price: totalPrice,
        status: "ACTIVE",
      },
    });

    const payment = await tx.payment.create({
      data: {
        userId,
        monthlyPassId: monthlyPass.id,
        amount: totalPrice,
        method: "CASH",
        status: "PENDING",
      },
    });

    return { monthlyPass, payment };
  });

  return res.status(201).json(
    formatSuccess({ monthlyPass, payment }, "Monthly pass registered successfully")
  );
});

// GET /api/monthly-passes/me
// Get all passes belonging to the current user
const getOwnMonthlyPasses = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const passes = await prisma.monthlyPass.findMany({
    where: { userId },
    include: {
      payment: { select: { amount: true, method: true, status: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return res.status(200).json(formatSuccess({ passes }));
});

// PUT /api/monthly-passes/:id/renew
// Renew an existing pass by extending endDate. Creates a new payment for the extension.
const renewMonthlyPass = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { months } = req.body;
  const userId = req.user.id;

  const pass = await prisma.monthlyPass.findUnique({ where: { id } });
  if (!pass) {
    return res.status(404).json(formatError("Monthly pass not found"));
  }
  if (pass.userId !== userId) {
    return res.status(403).json(formatError("This is not your pass"));
  }
  if (pass.status === "CANCELLED") {
    return res.status(400).json(formatError("Cannot renew a cancelled pass"));
  }

  const pricePerMonth = PASS_PRICES[pass.vehicleType];
  const extensionPrice = pricePerMonth * months;

  // Extend from current endDate (or now if expired)
  const base = pass.endDate > new Date() ? new Date(pass.endDate) : new Date();
  const newEndDate = new Date(base);
  newEndDate.setMonth(newEndDate.getMonth() + months);

  const { updatedPass, payment } = await prisma.$transaction(async (tx) => {
    const updatedPass = await tx.monthlyPass.update({
      where: { id },
      data: {
        endDate: newEndDate,
        status: "ACTIVE",
        price: { increment: extensionPrice },
      },
    });

    // New payment record for this renewal; the original payment from registration stays
    const payment = await tx.payment.create({
      data: {
        userId,
        amount: extensionPrice,
        method: "CASH",
        status: "PENDING",
        // Note: monthlyPassId @unique — only one payment can be linked per pass.
        // Renewal payments are walk-in payments (no monthlyPassId link) to avoid constraint conflict.
      },
    });

    return { updatedPass, payment };
  });

  return res.status(200).json(
    formatSuccess({ pass: updatedPass, payment }, "Monthly pass renewed successfully")
  );
});

// DELETE /api/monthly-passes/:id  (user cancel own)
const cancelOwnMonthlyPass = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const pass = await prisma.monthlyPass.findUnique({ where: { id } });
  if (!pass) {
    return res.status(404).json(formatError("Monthly pass not found"));
  }
  if (pass.userId !== userId) {
    return res.status(403).json(formatError("This is not your pass"));
  }
  if (pass.status !== "ACTIVE") {
    return res.status(400).json(formatError(`Cannot cancel a pass with status ${pass.status}`));
  }

  const updatedPass = await prisma.monthlyPass.update({
    where: { id },
    data: { status: "CANCELLED" },
  });

  return res.status(200).json(
    formatSuccess({ pass: updatedPass }, "Monthly pass cancelled")
  );
});

// ─── ADMIN + MANAGER ─────────────────────────────────────────────────────────

// GET /api/monthly-passes
const getAllMonthlyPasses = asyncHandler(async (req, res) => {
  const passes = await prisma.monthlyPass.findMany({
    include: {
      user: { select: { id: true, fullName: true, email: true } },
      payment: { select: { amount: true, method: true, status: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return res.status(200).json(formatSuccess({ passes }));
});

// ─── ADMIN ONLY ───────────────────────────────────────────────────────────────

// PUT /api/monthly-passes/:id/status — admin overrides pass status
const updatePassStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const pass = await prisma.monthlyPass.findUnique({ where: { id } });
  if (!pass) {
    return res.status(404).json(formatError("Monthly pass not found"));
  }

  const updatedPass = await prisma.monthlyPass.update({
    where: { id },
    data: { status },
  });

  return res.status(200).json(
    formatSuccess({ pass: updatedPass }, `Pass status updated to ${status}`)
  );
});

// PUT /api/monthly-passes/price — admin sets system-wide monthly prices
const updatePassPrice = asyncHandler(async (req, res) => {
  const { carMonthlyPrice, motorbikeMonthlyPrice } = req.body;

  if (carMonthlyPrice !== undefined) {
    PASS_PRICES.CAR = carMonthlyPrice;
  }
  if (motorbikeMonthlyPrice !== undefined) {
    PASS_PRICES.MOTORBIKE = motorbikeMonthlyPrice;
  }

  return res.status(200).json(
    formatSuccess(
      { currentPrices: PASS_PRICES },
      "Pass prices updated successfully"
    )
  );
});

export {
  registerMonthlyPass,
  getOwnMonthlyPasses,
  renewMonthlyPass,
  cancelOwnMonthlyPass,
  getAllMonthlyPasses,
  updatePassStatus,
  updatePassPrice,
};
