import { FaPlus } from "react-icons/fa";
import { SearchParams } from "next/dist/server/request/search-params";

import { ADD_CAR_RENT_ROUTE } from "@/constants/routes";
import { getRentalCars } from "@/api/rentalCars";
import { PAGE_LIMIT } from "@/constants/pagination";
import CarStats from "@/components/admin/cars/Stats";
import Filters from "@/components/admin/cars/rent/Filters";
import LinkButton from "@/components/LinkButton";
import Pagination from "@/components/admin/table/Pagination";
import Search from "@/components/admin/Search";
import Table from "@/components/admin/cars/rent/Table";

interface Props {
  searchParams: Promise<SearchParams>;
}

const DEFAULT_PAGE = "1";

const CarRentalPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const rentalCars = await getRentalCars({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT.toString(),
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <section>
      <CarStats />

      {/* Action Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Rental Cars Inventory
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage your fleet of rental vehicles
            </p>
          </div>
          <Search query={query.q as string} />
        </div>
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <Filters currentStatus={query.status ?? ""} />
          <LinkButton href={ADD_CAR_RENT_ROUTE} size="sm">
            <FaPlus />
            Add New Rental Car
          </LinkButton>
        </div>
        {/* Quick Filters */}
      </div>
      {/* Rental Cars Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <Table rentalCars={rentalCars.data} />
        <Pagination
          currentPage={rentalCars.currentPage}
          total={rentalCars.total}
          totalPages={rentalCars.totalPages}
        />
      </div>
    </section>
  );
};

export default CarRentalPage;
