import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const VALID_TRANSITIONS = {
  PENDING: ["SUCCESS", "FAILED"],
  SUCCESS: ["REFUNDED"],
  FAILED: [], // payment fail -> no transition
  REFUNDED: [], // payment refunded -> no transition
};

const createPayment = asyncHandler(async (req, res) => {
  const { bookingId, monthlyPassId, amount, method, referenceId } = req.body;
  const userId = req.user.id;

  // check if booking belong to user
  if (bookingId) {
    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId,
      },
    });
    if (!booking) {
      return res.status(404).json(formatError("Booking not found"));
    }
    if (booking.userId !== userId) {
      return res.status(403).json(formatError("Booking does not belong to user"));
    }
  }

  // check if monthlypass belong to user
  if (monthlyPassId) {
    const monthlyPass = await prisma.monthlyPass.findUnique({
      where: {
        id: monthlyPassId,
      },
    });
    if (!monthlyPass) {
      return res.status(404).json(formatError("Monthly pass not found"));
    }
    if (monthlyPass.userId !== userId) {
      return res.status(403).json(formatError("Monthly pass does not belong to user"));
    }
  }
  const payment = await prisma.payment.create({
    data: {
      userId,
      bookingId,
      monthlyPassId,
      amount,
      method,
      status: "PENDING",
      referenceId,
    },
  });
  res.status(201).json(formatSuccess(payment, "Payment created successfully"));
});

const getOwnPayment = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const payments = await prisma.payment.findMany({
    where: {
      userId,
    },
  });
  res.status(200).json(formatSuccess(payments, "Payments fetched successfully"));
});

const getAllPayment = asyncHandler(async (req, res) => {
  const payments = await prisma.payment.findMany();
  res.status(200).json(formatSuccess(payments, "Payments fetched successfully"));
});

const getPaymentByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const payments = await prisma.payment.findMany({
    where: {
      userId,
    },
  });
  res.status(200).json(formatSuccess(payments, "Payments fetched successfully"));
});

const getPaymentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const payment = await prisma.payment.findUnique({
    where: { id },
  });
  if (!payment) {
    return res.status(404).json(formatError("Payment not found"));
  }
  res.status(200).json(formatSuccess(payment, "Payment fetched successfully"));
});

const updatePaymentStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const existingPayment = await prisma.payment.findUnique({
    where: { id },
  });

  if (!existingPayment) {
    return res.status(404).json(formatError("Payment not found"));
  }

  // Guard: only allow valid status transitions
  const allowed = VALID_TRANSITIONS[existingPayment.status];
  if (!allowed || !allowed.includes(status)) {
    return res
      .status(400)
      .json(
        formatError(
          `Cannot transition from ${existingPayment.status} to ${status}. Allowed: ${allowed.join(", ") || "none (terminal state)"}`,
        ),
      );
  }

  const payment = await prisma.payment.update({
    where: { id },
    data: { status },
  });
  res.status(200).json(formatSuccess(payment, "Payment updated successfully"));
});

export {
  createPayment,
  getOwnPayment,
  getAllPayment,
  getPaymentByUserId,
  getPaymentById,
  updatePaymentStatus,
};
