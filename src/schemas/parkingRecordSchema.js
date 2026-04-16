import { z } from "zod";

// Schema for POST /api/records/checkin
export const checkInSchema = z.object({
  body: z.object({
    vehicleId: z.string().min(1, "Vehicle ID is required"),
    parkingSlotId: z.string().min(1, "Parking Slot ID is required"),
    parkingLotId: z.string().min(1, "Parking Lot ID is required"),
    bookingId: z.string().optional(), // optional: link check-in to a pre-existing booking
  }),
});

// Schema for PUT /api/records/:id/checkout  (id comes from params)
export const checkOutSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Parking Record ID is required"),
  }),
});
