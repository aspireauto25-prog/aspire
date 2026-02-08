"use client";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

interface Props {
  currentSort?: string | string[];
}

const BuySort = ({ currentSort }: Props) => {
  const updateParams = useUpdateQueryParams();

  function sort(sort: string) {
    updateParams({ sort });
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600 dark:text-gray-400">Sort:</span>
      <select
        className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
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
            key: "full_price",
            order: { ascending: true },
          })}
        >
          Price: Low to High
        </option>
        <option
          value={JSON.stringify({
            key: "full_price",
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
        <option
          value={JSON.stringify({
            key: "mileage",
            order: { ascending: true },
          })}
        >
          Mileage: Low to High
        </option>
      </select>
    </div>
  );
};

export default BuySort;
