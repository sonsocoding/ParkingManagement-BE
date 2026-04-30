import { prisma } from "../config/db.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";
import { verifyVnpayIpn, verifyVnpayReturn } from "../utils/vnpay.js";

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

const formatDayLabel = (date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
  }).format(date);

const formatDateRangeLabel = (startDate, endDate) =>
  `${formatDayLabel(startDate)} - ${formatDayLabel(endDate)}`;

const VALID_TRANSITIONS = {
  PENDING: ["SUCCESS", "FAILED"],
  SUCCESS: ["REFUNDED"],
  FAILED: [], // payment fail -> no transition
  REFUNDED: [], // payment refunded -> no transition
};

const respondToVnpay = (res, RspCode, Message) => {
  return res.status(200).json({ RspCode, Message });
};

const getVnpayPayment = async (paymentId) => {
  return prisma.payment.findUnique({
    where: { id: String(paymentId) },
    include: {
      ...paymentInclude,
      booking: true,
      monthlyPass: true,
    },
  });
};

const handleSuccessfulPayment = async (payment, verifiedResponse) => {
  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { id: payment.id },
      data: {
        status: "SUCCESS",
        referenceId: verifiedResponse.vnp_TransactionNo
          ? String(verifiedResponse.vnp_TransactionNo)
          : payment.referenceId,
      },
    });

    if (payment.bookingId) {
      await tx.booking.update({
        where: { id: payment.bookingId },
        data: { status: "CONFIRMED" },
      });
      return;
    }

    if (payment.monthlyPassId) {
      await tx.monthlyPass.update({
        where: { id: payment.monthlyPassId },
        data: { status: "ACTIVE" },
      });
      return;
    }

    // if monthly pass renewal, reactive pass and extend end date
    if (
      payment.metadata?.type === "MONTHLY_PASS_RENEWAL" &&
      payment.metadata.monthlyPassId
    ) {
      await tx.monthlyPass.update({
        where: { id: payment.metadata.monthlyPassId },
        data: {
          endDate: new Date(payment.metadata.newEndDate),
          status: "ACTIVE",
          price: { increment: Number(payment.metadata.extensionPrice) },
        },
      });
    }
  });
};

const handleFailedPayment = async (payment) => {
  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: { id: payment.id },
      data: { status: "FAILED" },
    });

    if (payment.bookingId) {
      const booking = await tx.booking.findUnique({
        where: { id: payment.bookingId },
      });

      if (booking?.status === "PENDING_PAYMENT") {
        await tx.booking.update({
          where: { id: booking.id },
          data: { status: "CANCELLED" },
        });

        // free reserved slot if payment failed
        await tx.parkingSlot.update({
          where: { id: booking.parkingSlotId },
          data: { status: "AVAILABLE" },
        });
      }
      return;
    }

    if (payment.monthlyPassId) {
      await tx.monthlyPass.update({
        where: { id: payment.monthlyPassId },
        data: { status: "CANCELLED" },
      });
    }
  });
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
    if (booking.paymentMethod === "MONTHLY_PASS") {
      return res
        .status(400)
        .json(formatError("Do not create a direct payment for a monthly-pass-covered booking"));
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
      return res
        .status(400)
        .json(
          formatError("Booking and monthly pass must belong to the same user"),
        );
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
  res
    .status(201)
    .json(formatSuccess({ payment }, "Payment created successfully"));
});

const getOwnPayment = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const payments = await prisma.payment.findMany({
    where: {
      userId,
    },
    include: paymentInclude,
  });
  res
    .status(200)
    .json(formatPaymentsResponse(payments, "Payments fetched successfully"));
});

const getAllPayment = asyncHandler(async (req, res) => {
  const payments = await prisma.payment.findMany({
    include: paymentInclude,
  });
  res
    .status(200)
    .json(formatPaymentsResponse(payments, "Payments fetched successfully"));
});

const getRevenueOverview = asyncHandler(async (req, res) => {
  const days = Number(req.query.days || 7);
  const weekOffset = Number(req.query.weekOffset || 0);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - weekOffset * 7);
  endDate.setHours(23, 59, 59, 999);

  const startDate = new Date(endDate);
  startDate.setHours(0, 0, 0, 0);
  startDate.setDate(startDate.getDate() - (days - 1));

  const successfulPayments = await prisma.payment.findMany({
    where: {
      status: "SUCCESS",
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    select: {
      amount: true,
      createdAt: true,
    },
  });

  const dailyRevenueMap = new Map();
  for (let index = 0; index < days; index += 1) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + index);
    dailyRevenueMap.set(day.toDateString(), {
      date: formatDayLabel(day),
      amount: 0,
    });
  }

  for (const payment of successfulPayments) {
    const paymentDate = new Date(payment.createdAt);
    paymentDate.setHours(0, 0, 0, 0);

    const revenueDay = dailyRevenueMap.get(paymentDate.toDateString());
    if (!revenueDay) continue;

    revenueDay.amount += Number(payment.amount) || 0;
  }

  const dailyRevenue = Array.from(dailyRevenueMap.values());
  const totalRevenue = dailyRevenue.reduce((sum, day) => sum + day.amount, 0);
  const todayRevenue = dailyRevenue.at(-1)?.amount || 0;

  return res.status(200).json(
    formatSuccess(
      {
        revenueOverview: {
          todayRevenue,
          totalRevenue,
          dailyRevenue,
          weekOffset,
          dateRangeLabel: formatDateRangeLabel(startDate, endDate),
        },
      },
      "Revenue overview fetched successfully",
    ),
  );
});

const getPaymentByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const payments = await prisma.payment.findMany({
    where: {
      userId,
    },
    include: paymentInclude,
  });
  res
    .status(200)
    .json(formatPaymentsResponse(payments, "Payments fetched successfully"));
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
  res
    .status(200)
    .json(formatSuccess({ payment }, "Payment fetched successfully"));
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
  res
    .status(200)
    .json(formatSuccess({ payment }, "Payment updated successfully"));
});

// browser return, verify signature and reconcile pending payment if IPN has not arrived yet
const handleVnpayReturn = asyncHandler(async (req, res) => {
  const verifiedResponse = verifyVnpayReturn(req.query);

  if (!verifiedResponse.isVerified) {
    return res.status(400).json(formatError(verifiedResponse.message));
  }

  const payment = await getVnpayPayment(verifiedResponse.vnp_TxnRef);

  if (!payment) {
    return res.status(404).json(formatError("Payment not found"));
  }

  if (Number(payment.amount) !== Number(verifiedResponse.vnp_Amount)) {
    return res.status(400).json(formatError("Invalid amount"));
  }

  if (payment.status === "PENDING") {
    if (verifiedResponse.isSuccess) {
      await handleSuccessfulPayment(payment, verifiedResponse);
    } else {
      await handleFailedPayment(payment);
    }
  }

  const refreshedPayment = await getVnpayPayment(verifiedResponse.vnp_TxnRef);

  return res.status(200).json(
    formatSuccess(
      {
        payment: refreshedPayment,
        vnpay: verifiedResponse,
      },
      verifiedResponse.isSuccess
        ? "VNPay payment completed"
        : "VNPay payment failed",
    ),
  );
});

// server-to-server callback, update DB
const handleVnpayIpn = asyncHandler(async (req, res) => {
  const verifiedResponse = verifyVnpayIpn(req.query);
  if (!verifiedResponse.isVerified) {
    return respondToVnpay(
      res,
      "97",
      verifiedResponse.message || "Invalid checksum",
    );
  }

  const payment = await getVnpayPayment(verifiedResponse.vnp_TxnRef);
  if (!payment) {
    return respondToVnpay(res, "01", "Order not found");
  }

  if (Number(payment.amount) !== Number(verifiedResponse.vnp_Amount)) {
    return respondToVnpay(res, "04", "Invalid amount");
  }

  if (payment.status !== "PENDING") {
    return respondToVnpay(res, "02", "Order already confirmed");
  }

  if (verifiedResponse.isSuccess) {
    await handleSuccessfulPayment(payment, verifiedResponse);
  } else {
    await handleFailedPayment(payment);
  }

  return respondToVnpay(res, "00", "Confirm Success");
});

export {
  createPayment,
  getOwnPayment,
  getAllPayment,
  getRevenueOverview,
  getPaymentByUserId,
  getPaymentById,
  updatePaymentStatus,
  handleVnpayReturn,
  handleVnpayIpn,
};
