import { z } from "zod";

const paymentMethodEnum = z.enum(["CASH", "CARD", "MOMO", "VNPAY"]);
const paymentStatusEnum = z.enum(["PENDING", "SUCCESS", "FAILED", "REFUNDED"]);

// Schema for POST /api/payments
export const createPaymentSchema = z.object({
  body: z
    .object({
      bookingId: z.string().min(1, "Booking ID cannot be empty").optional(),
      monthlyPassId: z.string().min(1, "Monthly Pass ID cannot be empty").optional(),
      amount: z
        .number({ required_error: "Amount is required" })
        .positive("Amount must be a positive number"),
      method: paymentMethodEnum,
      referenceId: z.string().optional(),
    })
    .refine((data) => data.bookingId || data.monthlyPassId, {
      message: "Either bookingId or monthlyPassId must be provided",
      path: ["bookingId"],
    })
    .refine((data) => !(data.bookingId && data.monthlyPassId), {
      message: "Cannot link payment to both a booking and a monthly pass",
      path: ["monthlyPassId"],
    }),
});

// Schema for PUT /api/payments/:id/status
export const updatePaymentStatusSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Payment ID is required"),
  }),
  body: z.object({
    status: paymentStatusEnum,
  }),
});
