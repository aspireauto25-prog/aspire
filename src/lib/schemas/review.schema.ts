import { z } from "zod";

export const reviewSchema = z.object({
  car: z.string().optional(),
  email: z.string("Email address is required."),
  name: z.string("Name is required."),
  ratings: z
    .number()
    .min(1, "Rating is required.")
    .max(5, "Rating must be at most 5."),
  review: z.string().trim(),
  service_used: z.string().optional(),
});
