import { AxiosError } from "axios";
import { ZodError } from "zod";

export class AppError extends Error {
  code?: string;
  fieldErrors?: Record<string, string>;
  raw?: unknown;

  constructor(
    message: string,
    options?: {
      code?: string;
      fieldErrors?: Record<string, string>;
      raw?: unknown;
    },
  ) {
    super(message);
    this.name = "AppError";
    this.code = options?.code;
    this.fieldErrors = options?.fieldErrors;
    this.raw = options?.raw;
  }
}

function normalizeError(error: unknown): AppError {
  // 1. Zod validation error
  if (error instanceof ZodError) {
    const fieldErrors: Record<string, string> = {};

    error.errors.forEach((err) => {
      const field = err.path.join(".");
      fieldErrors[field] = err.message;
    });

    return {
      message: "Please fix the highlighted fields!",
      fieldErrors,
      code: "VALIDATION_ERROR",
      raw: error,
      name: "AppError",
    };
  }

  // 2. Axios error (API / network)
  if (error instanceof AxiosError) {
    const data = error.response?.data as Record<string, unknown> | undefined;

    return {
      message: (data?.message ||
        error.message ||
        "Something went wrong while communicating with the server!") as string,
      fieldErrors: data?.fieldErrors as Record<string, string> | undefined,
      code: String(error.response?.status),
      raw: error,
      name: "AppError",
    };
  }

  // 3. Native Error (Next.js throw, runtime errors)
  if (error instanceof Error) {
    return {
      message: error.message || "Unexpected error occurred!",
      code: "RUNTIME_ERROR",
      raw: error,
      name: "",
    };
  }

  // 4. String errors
  if (typeof error === "string") {
    return {
      message: error,
      code: "STRING_ERROR",
      raw: error,
      name: "AppError",
    };
  }

  // 5. Fallback (unknown garbage)
  return {
    message: "Something went wrong!",
    code: "UNKNOWN_ERROR",
    raw: error,
    name: "AppError",
  };
}

export default normalizeError;
