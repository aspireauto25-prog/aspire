"use client";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

const Filters = () => {
  const updateParams = useUpdateQueryParams();

  function filter(status: string) {
    updateParams({ status });
  }

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <button
        onClick={() => filter("")}
        className="px-3 py-1.5 bg-primary text-white text-sm rounded-lg font-medium"
      >
        All
      </button>
      <button
        onClick={() => filter("")}
        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        New
      </button>
      <button
        onClick={() => filter("PENDING")}
        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        Pending
      </button>
      <button
        onClick={() => filter("RESPONDED")}
        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        Responded
      </button>
    </div>
  );
};

export default Filters;
