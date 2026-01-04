import { z } from "zod";

import { subjects } from "@/constants/contact";

export const contactSchema = z.object({
  email: z
    .email({
      error: (value) =>
        value.input === undefined
          ? "Email address is required."
          : "Invalid email address.",
    })
    .toLowerCase(),
  message: z.string().min(10, "Message is too short."),
  name: z.string("Name is required.").trim().min(2),
  phone: z.number("Phone number is required."),
  subject: z.enum(subjects),
});
