import { SearchParams } from "next/dist/server/request/search-params";
import type { Metadata } from "next";

import { CAR_STATUS_AVAILABLE } from "@/constants/cars";
import { getSaleCars } from "@/api/saleCars";
import BuyCard from "@/components/buy-sell/buy/Card";
import BuyFilter from "@/components/buy-sell/buy/Filter";
import BuySearch from "@/components/buy-sell/buy/Search";
import BuySort from "@/components/buy-sell/buy/Sort";
import EmptyData from "@/components/EmptyData";
import LoadMoreButton from "@/components/car/LoadMore";

export const metadata: Metadata = {
  title: "Buy Cars",
  description:
    "Explore our collection of verified new and used cars. Competitive prices and easy ownership process.",
  keywords: [
    "buy car",
    "used cars for sale",
    "second hand cars",
    "car dealership",
  ],
  alternates: {
    canonical: "/buy-sell/buy",
  },
};

interface Props {
  searchParams: Promise<SearchParams>;
}

const LIMIT = "12";

const BuyCarPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const saleCars = await getSaleCars({
    limit: query.limit ?? LIMIT,
    category: query.category ?? "",
    search: query.q ?? "",
    sort: query.sort ?? "",
    status: query.status ?? CAR_STATUS_AVAILABLE.toString(),
  });

  return (
    <section id="buy-tab" className="tab-content py-8">
      <div className="container mx-auto px-6">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Premium Cars for Sale</h2>
              <p className="text-gray-600 dark:text-gray-400">
                <span id="car-count">{saleCars.data.length}</span> cars
                available
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <BuySearch />
              <BuySort currentSort={query.sort ?? ""} />
            </div>
          </div>
          <BuyFilter currentCategory={query.category ?? ""} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {saleCars.data?.map((car) => (
            <BuyCard key={car.id} {...car} />
          ))}
        </div>

        {saleCars.data?.length == 0 ? (
          <EmptyData />
        ) : (
          <LoadMoreButton defaultLimit={LIMIT} />
        )}
      </div>
    </section>
  );
};

export default BuyCarPage;
