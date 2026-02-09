import { FaPlus } from "react-icons/fa";
import { SearchParams } from "next/dist/server/request/search-params";

import { ADD_CAR_SELL_ROUTE } from "@/constants/routes";
import { getSaleCars } from "@/api/saleCars";
import { DEFAULT_PAGE, PAGE_LIMIT } from "@/constants/pagination";
import Button from "@/components/Button";
import Filters from "@/components/admin/cars/sale/Filters";
import Pagination from "@/components/admin/table/Pagination";
import Search from "@/components/admin/Search";
import Table from "@/components/admin/cars/sale/Table";

interface Props {
  searchParams: Promise<SearchParams>;
}

const CarSalePage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const saleCars = await getSaleCars({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT,
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <>
      {/* Action Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Sale Cars Inventory
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage your fleet of sale vehicles
            </p>
          </div>
          <Search query={query.q as string} />
        </div>
        <div className="mt-6 flex flex-col xl:flex-row xl:items-center items-start justify-between gap-4">
          <Filters currentStatus={query.status ?? ""} />
          <Button href={ADD_CAR_SELL_ROUTE} size="sm">
            <FaPlus />
            Add New Sale Car
          </Button>
        </div>
        {/* Quick Filters */}
      </div>

      {/* Sale Cars Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <Table saleCars={saleCars.data} />
        <Pagination
          currentPage={saleCars.currentPage}
          total={saleCars.total}
          totalPages={saleCars.totalPages}
        />
      </div>
    </>
  );
};

export default CarSalePage;
