import { z } from "zod";

const roleEnum = z.enum(["ADMIN", "USER"]);

export const updateOwnProfileSchema = z.object({
  body: z.object({
    fullName: z.string().min(1, "Full name cannot be empty").optional(),
    email: z.email("Invalid email address").optional(),
    phone: z.string().optional(),
  }),
});

export const createUserSchema = z.object({
  body: z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.email("Invalid email address"),
    phone: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: roleEnum,
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    fullName: z.string().min(1, "Full name cannot be empty").optional(),
    email: z.email("Invalid email address").optional(),
    phone: z.string().optional(),
    role: roleEnum.optional(),
  }),
});
