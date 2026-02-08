import { FaExclamationCircle } from "react-icons/fa";

import normalizeError, { AppError } from "@/helpers/errorNormalization";

interface Props {
  defaultError?: string;
  error: AppError;
}

const ErrorModal = ({ defaultError, error }: Props) => {
  const normalizedError = normalizeError(error);

  return (
    <div className="flex flex-col w-full">
      <div className="text-red-500 mb-2 flex items-center gap-2">
        <FaExclamationCircle className="text-xl" />
        {defaultError ?? "Something went wrong!"}
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">Error Details:</p>
        <p id="errorDetailsText" className="text-sm font-mono">
          {normalizedError.message}

          {normalizedError.fieldErrors &&
            Object.entries(normalizedError.fieldErrors).map(
              ([field, message]) => (
                <div key={field}>
                  <strong className="capitalize">{field}:</strong> {message}
                </div>
              ),
            )}
        </p>
      </div>
    </div>
  );
};

export default ErrorModal;
