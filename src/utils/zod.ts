import { ZodError } from "zod";

export function formatZodErrors(error: ZodError) {
  return error?.issues.reduce((acc: Record<string, string>, current) => {
    const field = current.path.join(".") || "form";

    acc[field] = current.message;

    return acc;
  }, {});
}
