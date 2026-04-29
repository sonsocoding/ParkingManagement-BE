import { prisma } from "../config/db.js";

const DEFAULT_INTERVAL_MS = 5 * 60 * 1000; // check db every 5 mins
const DEFAULT_EXPIRATION_MS = 15 * 60 * 1000; // clean vnpay if pending for 15 mins

let paymentExpirationTimer = null;

const getPositiveNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const expirePendingVnpayPayments = async () => {
  const expirationMs = getPositiveNumber(
    process.env.VNPAY_PAYMENT_EXPIRATION_MS,
    DEFAULT_EXPIRATION_MS,
  );
  const cutoff = new Date(Date.now() - expirationMs);

  const stalePayments = await prisma.payment.findMany({
    where: {
      method: "VNPAY",
      status: "PENDING",
      createdAt: {
        lt: cutoff,
      },
    },
    include: {
      booking: true,
      monthlyPass: true,
    },
  });

  for (const payment of stalePayments) {
    await prisma.$transaction(async (tx) => {
      const currentPayment = await tx.payment.findUnique({
        where: { id: payment.id },
      });

      if (!currentPayment || currentPayment.status !== "PENDING") {
        return;
      }

      await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: "FAILED",
        },
      });

      if (payment.bookingId) {
        const currentBooking = await tx.booking.findUnique({
          where: { id: payment.bookingId },
        });

        if (currentBooking && currentBooking.status === "PENDING_PAYMENT") {
          await tx.booking.update({
            where: { id: currentBooking.id },
            data: {
              status: "CANCELLED",
            },
          });

          await tx.parkingSlot.update({
            where: { id: currentBooking.parkingSlotId },
            data: {
              status: "AVAILABLE",
            },
          });
        }
      }

      if (payment.monthlyPassId) {
        const currentPass = await tx.monthlyPass.findUnique({
          where: { id: payment.monthlyPassId },
        });

        if (currentPass && currentPass.status === "PENDING_PAYMENT") {
          await tx.monthlyPass.update({
            where: { id: currentPass.id },
            data: {
              status: "CANCELLED",
            },
          });
        }
      }
    });
  }
};

const startPaymentExpirationJob = () => {
  if (paymentExpirationTimer) {
    return paymentExpirationTimer;
  }

  const intervalMs = getPositiveNumber(
    process.env.VNPAY_PAYMENT_EXPIRATION_INTERVAL_MS,
    DEFAULT_INTERVAL_MS,
  );

  paymentExpirationTimer = setInterval(() => {
    expirePendingVnpayPayments().catch((error) => {
      console.error("VNPAY payment expiration job failed:", error);
    });
  }, intervalMs);

  if (typeof paymentExpirationTimer.unref === "function") {
    paymentExpirationTimer.unref();
  }

  expirePendingVnpayPayments().catch((error) => {
    console.error("Initial VNPAY payment expiration job run failed:", error);
  });

  return paymentExpirationTimer;
};

const stopPaymentExpirationJob = () => {
  if (paymentExpirationTimer) {
    clearInterval(paymentExpirationTimer);
    paymentExpirationTimer = null;
  }
};

export {
  expirePendingVnpayPayments,
  startPaymentExpirationJob,
  stopPaymentExpirationJob,
};
