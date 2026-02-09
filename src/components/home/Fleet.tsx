import { getRentalCars } from "@/api/rentalCars";
import RentCard from "../rent/Card";

const Fleet = async () => {
  const rentalCars = await getRentalCars({
    limit: `${6}`,
  });

  if (rentalCars.data?.length === 0) {
    return null; // Return null if there are no cars to display
  }

  return (
    <section
      id="cars"
      className="py-20 bg-linear-to-b from-light to-gray-100 dark:from-dark dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold">OUR PREMIUM FLEET</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Detailed Car <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our meticulously maintained fleet with detailed
            specifications, features, and availability.
          </p>
        </div>
        {/* Car Filters */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12 slide-up">
          <button className="px-6 py-3 rounded-full bg-primary text-white font-bold">
            All Cars
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            Sedans
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            SUVs
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            Luxury
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            Electric
          </button>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {rentalCars.data?.map((data) => (
            <RentCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
