import { z } from "zod";

export const changePasswordSchema = z.object({
  currentPassword: z.string("Current password is required."),
  newPassword: z
    .string("New password is required.")
    .min(6, "Password is too short."),
});

export const registerSchema = z.object({
  address: z.string("Address is required.").trim().min(2).optional(),
  email: z
    .email({
      error: (value) =>
        value.input === undefined
          ? "Email address is required."
          : "Invalid email address.",
    })
    .toLowerCase(),
  name: z.string("Name is required.").trim().min(2),
  password: z.string("Password is required.").min(6, "Password is too short."),
  phone: z.string("Phone number is required.").trim().min(2),
  role: z.string().optional(),
});

export const loginSchema = z.object({
  email: z
    .email({
      error: (value) =>
        value.input === undefined
          ? "Email address is required."
          : "Invalid email address.",
    })
    .toLowerCase(),
  password: z.string("Password is required."),
});
