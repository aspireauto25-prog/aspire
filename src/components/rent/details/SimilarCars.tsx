import { RentalCarWithDetails } from "@/lib/types/rentalCar.types";
import SimilarCarsCard from "./Card";
import { getRentalCars } from "@/api/rentalCars";

interface Props {
  car: RentalCarWithDetails;
}

const SimilarCars = async ({ car }: Props) => {
  const cars = await getRentalCars({ search: car.category });

  if (cars.data?.length == 0) return null;

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Similar Cars You Might Like
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out these similar vehicles in our premium fleet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.data?.map((car, index) => (
            <SimilarCarsCard key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarCars;
