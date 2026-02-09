"use client";

import { FaInbox } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Button from "./Button";

const EmptyData = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function resetFilters() {
    router.replace(pathname);
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-12 text-center">
      <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-6">
        <FaInbox className="text-3xl text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        No data found
      </h3>
      {searchParams.size > 0 && (
        <>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            All data have been processed or no data match your filters.
          </p>
          <div className="flex justify-center">
            <Button size="md" onClick={resetFilters}>
              Clear Filters
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default EmptyData;
