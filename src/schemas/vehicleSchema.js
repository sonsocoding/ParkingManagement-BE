import { z } from 'zod';

const vehicleTypeEnum = z.enum(["CAR", "MOTORBIKE"]);

export const createVehicleSchema = z.object({
  body: z.object({
    plateNumber: z.string().min(1, 'Plate number is required'),
    vehicleType: vehicleTypeEnum,
    color: z.string().optional(),
  }),
});

export const updateVehicleSchema = z.object({
  body: z.object({
    plateNumber: z.string().min(1, 'Plate number is required').optional(),
    vehicleType: vehicleTypeEnum.optional(),
    color: z.string().optional(),
  }),
});
