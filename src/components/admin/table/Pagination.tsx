import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { getCountFrom, getCountTo, getPageNumbers } from "@/helpers/pagination";

interface Props {
  currentPage: number;
  total: number;
  totalPages: number;
}

const Pagination = ({ currentPage, total, totalPages }: Props) => {
  const countFrom = getCountFrom(currentPage);
  const countTo = getCountTo(currentPage, total);
  const pages = getPageNumbers(totalPages);

  return (
    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between">
      <div className="mb-4 md:mb-0">
        <p className="flex gap-1 text-gray-500 dark:text-gray-400 text-sm">
          Showing
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {countFrom}
          </span>
          to
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {countTo}
          </span>
          of
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {total}
          </span>
          inquiries
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Link
          href={`?page=${currentPage == 1 ? currentPage : currentPage - 1}`}
          className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FaChevronLeft />
        </Link>
        {pages.map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`px-3 py-1.5 border rounded-lg text-sm ${
              page == currentPage
                ? "border-primary bg-primary text-white"
                : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            {page}
          </Link>
        ))}
        <Link
          href={`?page=${
            currentPage >= totalPages ? totalPages : currentPage + 1
          }`}
          className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FaChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
