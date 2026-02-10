import { AxiosError } from "axios";

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
  // Axios error (API / network)
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

  // Native Error (Next.js throw, runtime errors)
  if (error instanceof Error) {
    return {
      message: error.message || "Unexpected error occurred!",
      code: "RUNTIME_ERROR",
      raw: error,
      name: "",
    };
  }

  // String errors
  if (typeof error === "string") {
    return {
      message: error,
      code: "STRING_ERROR",
      raw: error,
      name: "AppError",
    };
  }

  // Fallback (unknown garbage)
  return {
    message: "Something went wrong!",
    code: "UNKNOWN_ERROR",
    raw: error,
    name: "AppError",
  };
}

export default normalizeError;
