import { z } from "zod";

const vehicleTypeEnum = z.enum(["CAR", "MOTORBIKE"]);
const passStatusEnum = z.enum(["PENDING_PAYMENT", "ACTIVE", "EXPIRED", "CANCELLED"]);
const onlinePaymentMethodEnum = z.literal("VNPAY");

// POST /api/monthly-passes — user registers a new pass
export const registerPassSchema = z.object({
  body: z.object({
    vehicleType: vehicleTypeEnum,
    months: z
      .int()
      .min(1, "Minimum 1 month")
      .max(12, "Maximum 12 months at once"),
    paymentMethod: onlinePaymentMethodEnum.default("VNPAY"),
  }),
});

// PUT /:id/renew — user renews their existing pass
export const renewPassSchema = z.object({
  body: z.object({
    months: z
      .int()
      .min(1, "Minimum 1 month")
      .max(12, "Maximum 12 months at once"),
    paymentMethod: onlinePaymentMethodEnum.default("VNPAY"),
  }),
});

// PUT /:id/status — admin changes a pass status
export const updatePassStatusSchema = z.object({
  body: z.object({
    status: passStatusEnum,
  }),
});

// PUT /api/monthly-passes/price — admin sets the system-wide pass prices
export const updatePassPriceSchema = z.object({
  body: z.object({
    carMonthlyPrice: z
      .number()
      .positive("Car monthly price must be positive")
      .optional(),
    motorbikeMonthlyPrice: z
      .number()
      .positive("Motorbike monthly price must be positive")
      .optional(),
  }),
});
