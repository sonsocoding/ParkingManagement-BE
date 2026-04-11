import { z } from "zod";

const vehicleTypeEnum = z.enum(["CAR", "MOTORBIKE"], {
  errorMap: () => ({ message: "Vehicle type must be CAR or MOTORBIKE" }),
});

const slotStatusEnum = z.enum(["AVAILABLE", "OCCUPIED", "RESERVED", "MAINTENANCE"], {
  errorMap: () => ({ message: "Invalid slot status" }),
});

export const bulkCreateParkingSlotSchema = z.object({
  body: z.object({
    parkingLotId: z.cuid("Invalid parking lot ID"),
    zoneId: z.string().min(1, "Zone ID is required"),
    slotNumbers: z
      .array(z.string().min(1, "Slot number cannot be empty"))
      .min(1, "At least one slot number must be provided"),
    vehicleType: vehicleTypeEnum,
  }),
});

export const updateSlotStatusSchema = z.object({
  body: z.object({
    status: slotStatusEnum,
  }),
  params: z.object({
    id: z.cuid("Invalid parking slot ID"),
  }),
});

export const updateParkingSlotSchema = z.object({
  body: z.object({
    parkingLotId: z.cuid("Invalid parking lot ID").optional(),
    zoneId: z.string().min(1, "Zone ID is required").optional(),
    slotNumber: z.string().min(1, "Slot number is required").optional(),
    vehicleType: vehicleTypeEnum.optional(),
  }),
  params: z.object({
    id: z.cuid("Invalid parking slot ID"),
  }),
});
