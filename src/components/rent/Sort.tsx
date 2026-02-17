"use client";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

interface Props {
  currentSort?: string | string[];
}

const RentalCarsSort = ({ currentSort }: Props) => {
  const updateParams = useUpdateQueryParams();

  function sort(sort: string) {
    updateParams({ sort });
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600 dark:text-gray-400">Sort:</span>
      <select
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full"
        name="sort"
        defaultValue={currentSort}
        onChange={(event) => sort(event.target.value)}
      >
        <option
          value={JSON.stringify({
            key: "created_at",
            order: { ascending: false },
          })}
        >
          Recommended
        </option>
        <option
          value={JSON.stringify({
            key: "daily_rate",
            order: { ascending: true },
          })}
        >
          Price: Low to High
        </option>
        <option
          value={JSON.stringify({
            key: "daily_rate",
            order: { ascending: false },
          })}
        >
          Price: High to Low
        </option>
        <option
          value={JSON.stringify({
            key: "year",
            order: { ascending: false },
          })}
        >
          Year: Newest First
        </option>
      </select>
    </div>
  );
};

export default RentalCarsSort;
