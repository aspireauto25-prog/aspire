"use client";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";
import { useSearchParams } from "next/navigation";

interface Props {
  filters: {
    label: string;
    value: number | string;
  }[];
}

const Filters = ({ filters }: Props) => {
  const searchParams = useSearchParams();

  const currentStatus = searchParams.get("status") ?? "";

  const updateParams = useUpdateQueryParams();

  function filter(status: string) {
    updateParams({ status });
  }

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => filter(item.value?.toString())}
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
