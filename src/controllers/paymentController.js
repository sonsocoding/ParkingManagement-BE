import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const paymentInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
    },
  },
};

const formatPaymentsResponse = (payments, message) =>
  formatSuccess({ payments }, message);

const VALID_TRANSITIONS = {
  PENDING: ["SUCCESS", "FAILED"],
  SUCCESS: ["REFUNDED"],
  FAILED: [], // payment fail -> no transition
  REFUNDED: [], // payment refunded -> no transition
};

const createPayment = asyncHandler(async (req, res) => {
  const { bookingId, monthlyPassId, amount, method, referenceId } = req.body;
  let targetUserId = null;

  // Validate booking relation and derive owner for admin-created payment.
  if (bookingId) {
    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId,
      },
    });
    if (!booking) {
      return res.status(404).json(formatError("Booking not found"));
    }
    targetUserId = booking.userId;
  }

  // Validate monthly pass relation and derive owner for admin-created payment.
  if (monthlyPassId) {
    const monthlyPass = await prisma.monthlyPass.findUnique({
      where: {
        id: monthlyPassId,
      },
    });
    if (!monthlyPass) {
      return res.status(404).json(formatError("Monthly pass not found"));
    }
    if (targetUserId && targetUserId !== monthlyPass.userId) {
      return res.status(400).json(formatError("Booking and monthly pass must belong to the same user"));
    }
    targetUserId = monthlyPass.userId;
  }

  const payment = await prisma.payment.create({
    data: {
      userId: targetUserId,
      bookingId,
      monthlyPassId,
      amount,
      method,
      status: "PENDING",
      referenceId,
    },
  });
  res.status(201).json(formatSuccess({ payment }, "Payment created successfully"));
});

const getOwnPayment = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const payments = await prisma.payment.findMany({
    where: {
      userId,
    },
    include: paymentInclude,
  });
  res.status(200).json(formatPaymentsResponse(payments, "Payments fetched successfully"));
});

const getAllPayment = asyncHandler(async (req, res) => {
  const payments = await prisma.payment.findMany({
    include: paymentInclude,
  });
  res.status(200).json(formatPaymentsResponse(payments, "Payments fetched successfully"));
});

const getPaymentByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const payments = await prisma.payment.findMany({
    where: {
      userId,
    },
    include: paymentInclude,
  });
  res.status(200).json(formatPaymentsResponse(payments, "Payments fetched successfully"));
});

const getPaymentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const payment = await prisma.payment.findUnique({
    where: { id },
    include: paymentInclude,
  });
  if (!payment) {
    return res.status(404).json(formatError("Payment not found"));
  }
  res.status(200).json(formatSuccess({ payment }, "Payment fetched successfully"));
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
  res.status(200).json(formatSuccess({ payment }, "Payment updated successfully"));
});

const handleVnpayIpn = asyncHandler(async (req, res) => {
  // In a real VNPAY integration, you would verify the secure hash here
  // const secureHash = req.query.vnp_SecureHash;
  // const calculatedHash = vnpayService.verifyIpnCall(req.query);

  const txnRef = req.query.vnp_TxnRef; // This is our booking ID
  const responseCode = req.query.vnp_ResponseCode;

  const booking = await prisma.booking.findUnique({
    where: { id: txnRef },
    include: { payment: true }, // Assumes 1-to-1 relation, which we manually mock
  });

  if (!booking) {
    return res.status(404).json({ RspCode: "01", Message: "Order not found" });
  }

  // Find the payment associated with this booking (bookingId is @unique in schema)
  const payment = await prisma.payment.findUnique({
    where: { bookingId: booking.id },
  });

  if (!payment) {
    return res.status(404).json({ RspCode: "01", Message: "Payment not found" });
  }

  if (payment.status === "SUCCESS") {
    return res.status(200).json({ RspCode: "02", Message: "Order already confirmed" });
  }

  if (responseCode === "00") {
    // Payment success
    await prisma.$transaction([
      prisma.payment.update({
        where: { id: payment.id },
        data: { status: "SUCCESS" },
      }),
      prisma.booking.update({
        where: { id: booking.id },
        data: { status: "CONFIRMED" },
      }),
    ]);
  } else {
    // Payment failed
    await prisma.$transaction([
      prisma.payment.update({
        where: { id: payment.id },
        data: { status: "FAILED" },
      }),
      prisma.booking.update({
        where: { id: booking.id },
        data: { status: "CANCELLED" },
      }),
      // Free the slot
      prisma.parkingSlot.update({
        where: { id: booking.parkingSlotId },
        data: { status: "AVAILABLE" },
      }),
    ]);
  }

  return res.status(200).json({ RspCode: "00", Message: "Confirm Success" });
});

export {
  createPayment,
  getOwnPayment,
  getAllPayment,
  getPaymentByUserId,
  getPaymentById,
  updatePaymentStatus,
  handleVnpayIpn,
};
