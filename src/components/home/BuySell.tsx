import { FaCar, FaFileContract, FaSearch, FaTag } from "react-icons/fa";

import { BUY_CAR_ROUTE, SELL_CAR_ROUTE } from "@/constants/routes";
import { CAR_STATUS_AVAILABLE } from "@/constants/cars";
import { getSaleCars } from "@/api/saleCars";
import Button from "../Button";
import BuyCard from "../buy-sell/buy/Card";
import OutlinedButton from "../OutlinedButton";

const BuySell = async () => {
  const saleCars = await getSaleCars({
    status: CAR_STATUS_AVAILABLE.toString(),
    limit: `${3}`,
  });

  if (saleCars.data?.length === 0) {
    return null; // Return null if there are no cars to display
  }

  return (
    <section className="py-16 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold">CARS ON SALE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Cars<span className="text-primary"> For Sale</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Keep your vehicle in perfect condition with our certified
            technicians and state-of-the-art equipment.
          </p>
        </div>

        {/* Buy Cars Content (Default Active) */}
        <div id="buy-content" className="space-y-12">
          {/* Featured Cars for Sale */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {saleCars.data?.map((car) => (
                <BuyCard key={car.id} {...car} />
              ))}
            </div>
          </div>
          {/* Buy Car Process */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              How to Buy a Car with Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <FaSearch className="text-white text-xl" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Browse &amp; Select</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore our extensive inventory of premium vehicles and select
                  your favorite.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <FaCar className="text-white text-xl" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">
                  Test Drive &amp; Inspect
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Schedule a test drive and have the vehicle inspected by our
                  certified mechanics.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <FaFileContract className="text-white text-xl" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Complete Purchase</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Finalize the paperwork and drive away in your dream car with
                  full confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <Button href={BUY_CAR_ROUTE}>
              <FaCar /> Browse All Cars for Sale
            </Button>
            <OutlinedButton href={SELL_CAR_ROUTE}>
              <FaTag /> Start Selling Your Car
            </OutlinedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySell;
