import { FaArrowDown } from "react-icons/fa";
import { SearchParams } from "next/dist/server/request/search-params";

import { getRentalCars } from "@/api/rentalCars";
import EmptyData from "@/components/EmptyData";
import OutlinedButton from "@/components/OutlinedButton";
import RentCard from "@/components/rent/Card";

interface Props {
  searchParams: Promise<SearchParams>;
}

const RentListPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const rentalCars = await getRentalCars({
    search: query.q ?? "",
  });

  return (
    <>
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
    </>
  );
};

export default RentListPage;
