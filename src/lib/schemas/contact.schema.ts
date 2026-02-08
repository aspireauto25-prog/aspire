import { z } from "zod";

import { subjects } from "@/constants/contact";

export const contactSchema = z.object({
  email: z
    .email({
      error: (value) =>
        value.input ? "Invalid email address." : "Email address is required.",
    })
    .toLowerCase(),
  message: z.string().min(10, "Message is too short."),
  name: z
    .string({
      error: (value) => (value.input ? "Invalid name." : "Name is required."),
    })
    .trim()
    .min(2),
  phone: z.string("Phone number is required.").trim().min(2),
  subject: z.enum(subjects),
});
