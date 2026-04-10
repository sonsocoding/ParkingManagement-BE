import { z } from "zod";

const lotTypeEnum = z.enum(["CAR_ONLY", "MOTORBIKE_ONLY", "BOTH"]);

const parkingLotBase = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  totalSlots: z.number().int().positive("Total slots must be positive"),
  lotType: lotTypeEnum.default("BOTH"),
  zones: z.any().optional(),
  carHourlyRate: z.number().positive("Car hourly rate must be positive").optional(),
  motorbikeHourlyRate: z.number().positive("Motorbike hourly rate must be positive").optional(),
});

const validateRates = (data, ctx) => {
  if (data.lotType === "BOTH") {
    if (data.carHourlyRate === undefined) {
      ctx.addIssue({
        code: z.custom,
        message: "Car hourly rate is required when lot type is BOTH",
        path: ["carHourlyRate"],
      });
    }
    if (data.motorbikeHourlyRate === undefined) {
      ctx.addIssue({
        code: z.custom,
        message: "Motorbike hourly rate is required when lot type is BOTH",
        path: ["motorbikeHourlyRate"],
      });
    }
  } else if (data.lotType === "CAR_ONLY") {
    if (data.carHourlyRate === undefined) {
      ctx.addIssue({
        code: z.custom,
        message: "Car hourly rate is required",
        path: ["carHourlyRate"],
      });
    }
    if (data.motorbikeHourlyRate !== undefined) {
      ctx.addIssue({
        code: z.custom,
        message: "Cannot provide motorbike hourly rate for a CAR_ONLY lot",
        path: ["motorbikeHourlyRate"],
      });
    }
  } else if (data.lotType === "MOTORBIKE_ONLY") {
    if (data.motorbikeHourlyRate === undefined) {
      ctx.addIssue({
        code: z.custom,
        message: "Motorbike hourly rate is required",
        path: ["motorbikeHourlyRate"],
      });
    }
    if (data.carHourlyRate !== undefined) {
      ctx.addIssue({
        code: z.custom,
        message: "Cannot provide car hourly rate for a MOTORBIKE_ONLY lot",
        path: ["carHourlyRate"],
      });
    }
  }
};

export const createParkingLotSchema = z.object({
  body: parkingLotBase.superRefine(validateRates),
});

export const updateParkingLotSchema = z.object({
  body: z
    .object({
      name: z.string().min(1, "Name is required").optional(),
      address: z.string().min(1, "Address is required").optional(),
      totalSlots: z.number().int().positive("Total slots must be positive").optional(),
      lotType: lotTypeEnum.optional(),
      zones: z.any().optional(),
      carHourlyRate: z.number().positive("Car hourly rate must be positive").optional(),
      motorbikeHourlyRate: z.number().positive("Motorbike hourly rate must be positive").optional(),
    })
    .superRefine((data, ctx) => {
      // For partial updates, we enforce negative constraints if specific rate and lotType combinations conflict
      if (data.lotType === "CAR_ONLY" && data.motorbikeHourlyRate !== undefined) {
        ctx.addIssue({
          code: z.custom,
          message: "Cannot provide motorbike hourly rate for a CAR_ONLY lot",
          path: ["motorbikeHourlyRate"],
        });
      }
      if (data.lotType === "MOTORBIKE_ONLY" && data.carHourlyRate !== undefined) {
        ctx.addIssue({
          code: z.custom,
          message: "Cannot provide car hourly rate for a MOTORBIKE_ONLY lot",
          path: ["carHourlyRate"],
        });
      }
    }),
});
