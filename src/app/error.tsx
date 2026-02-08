"use client";

import ErrorComponent from "@/components/ErrorComponent";
import { AppError } from "@/helpers/errorNormalization";

const ErrorHandler = ({ error }: { error: Error | AppError }) => {
  return <ErrorComponent defaultError="Oops!" error={error} />;
};

export default ErrorHandler;
