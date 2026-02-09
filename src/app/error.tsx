"use client";

import { FaHome } from "react-icons/fa";

import { AppError } from "@/helpers/errorNormalization";
import { HOME_ROUTE } from "@/constants/routes";
import Button from "@/components/Button";
import ErrorComponent from "@/components/ErrorComponent";
import OutlinedButton from "@/components/OutlinedButton";

interface ErrorHandlerProps {
  error: Error | AppError;
  reset: () => void;
}

const ErrorHandler = ({ error, reset }: ErrorHandlerProps) => {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6">
        <ErrorComponent
          defaultError="Oops, Something went wrong!!!"
          error={error}
        />
        <div className="flex items-center gap-4 mt-6">
          <OutlinedButton onClick={reset} size="md">
            Try Again
          </OutlinedButton>
          <Button href={HOME_ROUTE} size="md">
            <FaHome /> Go Back Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ErrorHandler;
