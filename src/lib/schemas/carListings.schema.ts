import { z } from "zod";

export const carListingSchema = z.object({
  brand: z
    .string("Car brand is required.")
    .trim()
    .min(2, "Car brand is too short."),
  condition: z.string().optional(),
  description: z.string().optional(),
  mileage: z.number().optional(),
  model: z.string("Car model is required.").trim(),
  owner_email: z.string("Owner's email is required."),
  owner_name: z.string("Owner's name is required."),
  owner_phone: z.string("Owner's phone is required."),
  price: z.number("Car price is required."),
  variant: z.string().trim().optional(),
  year: z.number({
    error: (value) =>
      value.input === undefined ? "Year is required." : "Invalid year value.",
  }),
});
