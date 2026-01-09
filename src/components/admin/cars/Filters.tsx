"use client";

import {
  CAR_STATUS_AVAILABLE,
  CAR_STATUS_MAINTENANCE,
  CAR_STATUS_UNAVAILABLE,
} from "@/constants/car";
import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

interface Props {
  currentStatus?: string | string[];
}

const filters = [
  { label: "All", value: "" },
  { label: "Available", value: CAR_STATUS_AVAILABLE },
  { label: "Maintenance", value: CAR_STATUS_MAINTENANCE },
  { label: "Unavailable", value: CAR_STATUS_UNAVAILABLE },
];

const Filters = ({ currentStatus }: Props) => {
  const updateParams = useUpdateQueryParams();

  function filter(status: string) {
    updateParams({ status });
  }

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => filter(item.value)}
          className={`px-3 py-1.5 text-sm rounded-lg font-medium cursor-pointer ${
            item.value == currentStatus
              ? "bg-primary text-white"
              : " bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
