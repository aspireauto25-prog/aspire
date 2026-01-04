import { z } from "zod";

import { subjects } from "@/constants/contact";

export const contactSchema = z.object({
  email: z.email().toLowerCase(),
  message: z.string().min(10),
  name: z.string().trim().min(2),
  phone: z.number(),
  subject: z.enum(subjects),
});
