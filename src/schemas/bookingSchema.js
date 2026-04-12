import { z } from "zod";

const bookingStatusEnum = z.enum(["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"]);

export const createBookingSchema = z.object({
  body: z
    .object({
      vehicleId: z.string().min(1, "Vehicle ID is required"),
      parkingLotId: z.string().min(1, "Parking Lot ID is required"),
      parkingSlotId: z.string().min(1, "Parking Slot ID is required"),
      startTime: z.iso.datetime("Start time must be a valid ISO DateTime string"),
      endTime: z.iso.datetime("End time must be a valid ISO DateTime string"),
    })
    .refine((data) => new Date(data.startTime) > new Date(), {
      message: "Start time must be in the future",
      path: ["startTime"],
    })
    .refine((data) => new Date(data.endTime) > new Date(data.startTime), {
      message: "End time must be after start time",
      path: ["endTime"],
    }),
});

export const updateBookingSchema = z.object({
  body: z
    .object({
      vehicleId: z.string().optional(),
      parkingLotId: z.string().optional(),
      parkingSlotId: z.string().optional(),
      startTime: z.iso.datetime().optional(),
      endTime: z.iso.datetime().optional(),
    })
    .refine(
      (data) => {
        if (data.startTime && data.endTime) {
          return new Date(data.endTime) > new Date(data.startTime);
        }
        return true;
      },
      {
        message: "End time must be after start time",
        path: ["endTime"],
      },
    ),
});

export const updateBookingStatusSchema = z.object({
  body: z.object({
    status: bookingStatusEnum,
  }),
});
