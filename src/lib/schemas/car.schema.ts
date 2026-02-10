import { z } from "zod";

export const carSchema = z.object({
  brand: z
    .string("Car brand is required.")
    .trim()
    .min(2, "Car brand is too short."),
  category: z.string().trim().optional(),
  chassis_number: z
    .string("Chassis number is required.")
    .trim()
    .min(2, "Chassis number is too short."),
  color: z.string().trim().optional(),
  condition: z.string().trim().optional(),
  description: z.string().optional(),
  drive_type: z.string().trim().optional(),
  engine_capacity: z.number().optional(),
  engine_number: z.string().trim().optional(),
  features: z
    .string()
    .optional()
    .transform((value) =>
      value
        ? value
            .split(",")
            .map((f) => f.trim())
            .filter(Boolean)
        : [],
    ),
  fuel_type: z.string().trim().optional(),
  id: z.number().optional(),
  license_plate: z
    .string("License plate is required.")
    .trim()
    .min(2, "License plate is too short."),
  mileage: z.number().optional(),
  model: z.string("Car model is required.").trim(),
  price: z.number("Car price is required."),
  seat_capacity: z.number().optional(),
  transmission_type: z.string().trim().optional(),
  variant: z.string().trim().optional(),
  year: z.number({
    error: (value) =>
      value.input === undefined ? "Year is required." : "Invalid year value.",
  }),
});

export const carImageSchema = z.object({
  car_id: z.number(),
  images: z.array(
    z.object({
      featured: z.boolean().default(false),
      url: z.string(),
    }),
  ),
});
