import { getRentalCars } from "@/api/rentalCars";
import RentCard from "@/components/rent/Card";

const RentListPage = async () => {
  const rentalCars = await getRentalCars();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rentalCars.data?.map((data) => (
        <RentCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default RentListPage;
