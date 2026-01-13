import { FaPlus } from "react-icons/fa";
import { SearchParams } from "next/dist/server/request/search-params";

import { ADD_CAR_ROUTE } from "@/constants/routes";
import { getCars } from "@/api/cars";
import { PAGE_LIMIT } from "@/constants/pagination";
import Filters from "@/components/admin/cars/Filters";
import LinkButton from "@/components/LinkButton";
import Pagination from "@/components/admin/table/Pagination";
import Search from "@/components/admin/Search";
import Table from "@/components/admin/cars/Table";

interface Props {
  searchParams: Promise<SearchParams>;
}

const DEFAULT_PAGE = "1";

const CarsPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const cars = await getCars({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT.toString(),
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              All Cars
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage your car inventory, add new cars, edit or delete existing
              ones
            </p>
          </div>
          <Search query={query.q as string} />
        </div>
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <Filters currentStatus={query.status ?? ""} />
          <LinkButton href={ADD_CAR_ROUTE} size="sm">
            <FaPlus />
            Add New Car
          </LinkButton>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden ">
        <Table cars={cars.data} />
        <Pagination
          currentPage={cars.currentPage}
          total={cars.total}
          totalPages={cars.totalPages}
        />
      </div>
    </>
  );
};

export default CarsPage;
