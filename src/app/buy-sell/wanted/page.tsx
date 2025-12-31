import { carsWanted } from "@/data/buySell";
import WantedCard from "@/components/buy-sell/wanted/Card";

const WantedPage = () => {
  return (
    <section id="wanted-tab" className="tab-content py-8">
      <div className="container mx-auto px-6">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cars Buyers Are Looking For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sell your car quickly to buyers who are actively searching
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {carsWanted.map((car) => (
              <WantedCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WantedPage;
