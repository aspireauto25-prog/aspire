import { FaArrowDown } from "react-icons/fa";
import { SearchParams } from "next/dist/server/request/search-params";

import { getRentalCars } from "@/api/rentalCars";
import EmptyData from "@/components/EmptyData";
import OutlinedButton from "@/components/OutlinedButton";
import RentalCarsFilter from "@/components/rent/Filter";
import RentalCarsSort from "@/components/rent/Sort";
import RentCard from "@/components/rent/Card";

interface Props {
  searchParams: Promise<SearchParams>;
}

const RentListPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const rentalCars = await getRentalCars({
    search: query.q ?? "",
    sort: query.sort ?? "",
    status: query.status ?? "",
  });

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              <div>
                <h2 className="text-2xl font-bold">
                  Available Cars (
                  <span id="car-count">{rentalCars.data?.length}</span>)
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Select from our premium collection
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
                <RentalCarsFilter currentStatus={query.status ?? ""} />
                <RentalCarsSort currentSort={query.sort ?? ""} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {rentalCars.data?.map((data) => (
                <RentCard key={data.id} {...data} />
              ))}
            </div>

            {rentalCars.data?.length == 0 ? (
              <EmptyData />
            ) : (
              <div className="mt-12 text-center">
                <OutlinedButton rounded className="mx-auto">
                  Load More Cars
                  <FaArrowDown />
                </OutlinedButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentListPage;
