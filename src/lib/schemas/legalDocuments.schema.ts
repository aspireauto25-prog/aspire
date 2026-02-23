import { z } from "zod";

export const legalDocumentsSchema = z.object({
  content: z.string().min(10, "Message is too short."),
  type: z
    .string({
      error: (value) => (value.input ? "Invalid type." : "Type is required."),
    })
    .trim()
    .min(2),
});
