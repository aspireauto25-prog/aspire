import {
  FaCar,
  FaEye,
  FaFileContract,
  FaGasPump,
  FaSearch,
  FaTachometerAlt,
  FaTag,
  FaUserFriends,
} from "react-icons/fa";
import Image from "next/image";

import { BUY_ROUTE, RENT_ROUTE, SELL_ROUTE } from "@/constants/routes";
import Button from "../Button";
import OutlinedButton from "../OutlinedButton";

const BuySell = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Car 1 */}
              <div className="bg-white dark:bg-gray-900  rounded-2xl overflow-hidden shadow-lg card-hover relative">
                <div className="buy-badge">FOR SALE</div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Mercedes-Benz"
                    className="w-full h-full object-cover"
                    height={400}
                    width={600}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold">Mercedes-Benz GLE</h4>
                    <span className="text-2xl font-bold text-primary">
                      $45,800
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    2020 • 18,500 mi • Automatic • SUV
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                    <div className="flex items-center">
                      <FaGasPump className="mr-2" />
                      <span>Petrol</span>
                    </div>
                    <div className="flex items-center">
                      <FaTachometerAlt className="mr-2" />
                      <span>28,000 mi</span>
                    </div>
                    <div className="flex items-center">
                      <FaUserFriends className="mr-2" />
                      <span>5 seats</span>
                    </div>
                  </div>
                  <Button href={`${RENT_ROUTE}/1`} size="md">
                    <FaEye /> View Details
                  </Button>
                </div>
              </div>
              {/* Car 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg card-hover relative">
                <div className="buy-badge">FOR SALE</div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Audi"
                    className="w-full h-full object-cover"
                    height={400}
                    width={600}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold">Audi Q7 Premium</h4>
                    <span className="text-2xl font-bold text-primary">
                      $52,300
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    2021 • 12,000 mi • Automatic • Luxury SUV
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                    <div className="flex items-center">
                      <FaGasPump className="mr-2" />
                      <span>Diesel</span>
                    </div>
                    <div className="flex items-center">
                      <FaTachometerAlt className="mr-2" />
                      <span>12,000 mi</span>
                    </div>
                    <div className="flex items-center">
                      <FaUserFriends className="mr-2" />
                      <span>7 seats</span>
                    </div>
                  </div>
                  <Button href={`${RENT_ROUTE}/1`} size="md">
                    <FaEye /> View Details
                  </Button>
                </div>
              </div>
              {/* Car 3 */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg card-hover relative">
                <div className="sale-badge">HOT DEAL</div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="BMW"
                    className="w-full h-full object-cover"
                    height={400}
                    width={600}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold">BMW X5 xDrive</h4>
                    <span className="text-2xl font-bold text-primary">
                      $48,900
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    2019 • 24,500 mi • Automatic • Sports Activity
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                    <div className="flex items-center">
                      <FaGasPump className="mr-2" />
                      <span>Petrol</span>
                    </div>
                    <div className="flex items-center">
                      <FaTachometerAlt className="mr-2" />
                      <span>24,500 mi</span>
                    </div>
                    <div className="flex items-center">
                      <FaUserFriends className="mr-2" />
                      <span>5 seats</span>
                    </div>
                  </div>
                  <Button href={`${RENT_ROUTE}/1`} size="md">
                    <FaEye /> View Details
                  </Button>
                </div>
              </div>
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
            <Button href={BUY_ROUTE}>
              <FaCar /> Browse All Cars for Sale
            </Button>
            <OutlinedButton href={SELL_ROUTE}>
              <FaTag /> Start Selling Your Car
            </OutlinedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySell;
