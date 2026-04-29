import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";
import { buildVnpayPaymentUrl } from "../utils/vnpay.js";

// System-wide monthly pass prices — admin can update these via PUT /api/monthly-passes/price.
// Stored in-memory; in production you'd store these in a DB settings table.
export const PASS_PRICES = {
  CAR: 1500000, // 1,500,000 VND/month
  MOTORBIKE: 300000, // 300,000 VND/month
};

// This pass can be used by any vehicle of the matched type owned by the user, but only one vehicle at a time.
const registerMonthlyPass = asyncHandler(async (req, res) => {
  const { vehicleType, months } = req.body;
  const userId = req.user.id;

  // Check: user must not already have an ACTIVE or pending-payment pass for this vehicle type
  const existingPass = await prisma.monthlyPass.findFirst({
    where: {
      userId,
      vehicleType,
      status: { in: ["ACTIVE", "PENDING_PAYMENT"] },
    },
  });
  if (existingPass) {
    return res
      .status(409)
      .json(
        formatError(
          `You already have an ${existingPass.status} ${vehicleType} pass. Renew it instead.`,
        ),
      );
  }

  const pricePerMonth = PASS_PRICES[vehicleType];
  const totalPrice = pricePerMonth * months;
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + months);

  const result = await prisma.$transaction(async (tx) => {
    const monthlyPass = await tx.monthlyPass.create({
      data: {
        userId,
        vehicleType,
        startDate,
        endDate,
        price: totalPrice,
        status: "PENDING_PAYMENT",
      },
    });

    const payment = await tx.payment.create({
      data: {
        userId,
        monthlyPassId: monthlyPass.id,
        amount: totalPrice,
        method: "VNPAY",
        status: "PENDING",
        metadata: {
          type: "MONTHLY_PASS_PURCHASE",
          monthlyPassId: monthlyPass.id,
        },
      },
    });

    let paymentUrl = null;
    let paymentExpiresAt = null;
    const vnpayPayload = buildVnpayPaymentUrl({
      req,
      paymentId: payment.id,
      amount: totalPrice,
      orderInfo: `Monthly pass purchase ${monthlyPass.id}`,
    });
    paymentUrl = vnpayPayload.paymentUrl;
    paymentExpiresAt = vnpayPayload.expiresAt;

    return { monthlyPass, payment, paymentUrl, paymentExpiresAt };
  });

  return res.status(201).json(
    formatSuccess(
      {
        monthlyPass: result.monthlyPass,
        payment: result.payment,
        paymentUrl: result.paymentUrl,
        paymentExpiresAt: result.paymentExpiresAt,
      },
      "Monthly pass registered successfully",
    ),
  );
});

// Get all passes belonging to the current user
const getOwnMonthlyPasses = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const monthlyPasses = await prisma.monthlyPass.findMany({
    where: { userId },
    include: {
      payment: { select: { amount: true, method: true, status: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return res.status(200).json(formatSuccess({ monthlyPasses }));
});

// Renew an existing pass by extending endDate. Creates a new payment for the extension.
const renewMonthlyPass = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { months } = req.body;
  const userId = req.user.id;

  const monthlyPass = await prisma.monthlyPass.findUnique({ where: { id } });
  if (!monthlyPass) {
    return res.status(404).json(formatError("Monthly pass not found"));
  }
  if (monthlyPass.userId !== userId) {
    return res.status(403).json(formatError("This is not your pass"));
  }
  if (monthlyPass.status === "CANCELLED") {
    return res.status(400).json(formatError("Cannot renew a cancelled pass"));
  }
  if (monthlyPass.status === "PENDING_PAYMENT") {
    return res
      .status(400)
      .json(formatError("Cannot renew a pass that is waiting for payment"));
  }

  const pricePerMonth = PASS_PRICES[monthlyPass.vehicleType];
  const extensionPrice = pricePerMonth * months;

  // Extend from current endDate (or now if expired)
  const base =
    monthlyPass.endDate > new Date()
      ? new Date(monthlyPass.endDate)
      : new Date();
  const newEndDate = new Date(base);
  newEndDate.setMonth(newEndDate.getMonth() + months);

  const payment = await prisma.payment.create({
    data: {
      userId,
      amount: extensionPrice,
      method: "VNPAY",
      status: "PENDING",
      metadata: {
        type: "MONTHLY_PASS_RENEWAL",
        monthlyPassId: id,
        months,
        extensionPrice,
        newEndDate: newEndDate.toISOString(),
      },
    },
  });

  const { paymentUrl, expiresAt } = buildVnpayPaymentUrl({
    req,
    paymentId: payment.id,
    amount: extensionPrice,
    orderInfo: `Monthly pass renewal ${id}`,
  });

  return res.status(200).json(
    formatSuccess(
      {
        monthlyPass,
        payment,
        paymentUrl,
        paymentExpiresAt: expiresAt,
      },
      "Monthly pass renewal initialized successfully",
    ),
  );
});

const cancelOwnMonthlyPass = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const monthlyPass = await prisma.monthlyPass.findUnique({ where: { id } });
  if (!monthlyPass) {
    return res.status(404).json(formatError("Monthly pass not found"));
  }
  if (monthlyPass.userId !== userId) {
    return res.status(403).json(formatError("This is not your pass"));
  }
  if (monthlyPass.status !== "ACTIVE") {
    return res
      .status(400)
      .json(
        formatError(`Cannot cancel a pass with status ${monthlyPass.status}`),
      );
  }

  const cancelledMonthlyPass = await prisma.monthlyPass.update({
    where: { id },
    data: { status: "CANCELLED" },
  });

  return res
    .status(200)
    .json(
      formatSuccess(
        { monthlyPass: cancelledMonthlyPass },
        "Monthly pass cancelled",
      ),
    );
});

// ─── ADMIN ─────────────────────────────────────────────────────────

const getAllMonthlyPasses = asyncHandler(async (req, res) => {
  const monthlyPasses = await prisma.monthlyPass.findMany({
    include: {
      user: { select: { id: true, fullName: true, email: true } },
      payment: { select: { amount: true, method: true, status: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return res.status(200).json(formatSuccess({ monthlyPasses }));
});

const updatePassStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const monthlyPass = await prisma.monthlyPass.findUnique({ where: { id } });
  if (!monthlyPass) {
    return res.status(404).json(formatError("Monthly pass not found"));
  }

  const monthlyPassResult = await prisma.monthlyPass.update({
    where: { id },
    data: { status },
  });

  return res
    .status(200)
    .json(
      formatSuccess(
        { monthlyPass: monthlyPassResult },
        `Pass status updated to ${status}`,
      ),
    );
});

const updatePassPrice = asyncHandler(async (req, res) => {
  const { carMonthlyPrice, motorbikeMonthlyPrice } = req.body;

  if (carMonthlyPrice !== undefined) {
    PASS_PRICES.CAR = carMonthlyPrice;
  }
  if (motorbikeMonthlyPrice !== undefined) {
    PASS_PRICES.MOTORBIKE = motorbikeMonthlyPrice;
  }

  return res
    .status(200)
    .json(
      formatSuccess(
        { currentPrices: PASS_PRICES },
        "Pass prices updated successfully",
      ),
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
