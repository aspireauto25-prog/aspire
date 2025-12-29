import { FaThLarge } from "react-icons/fa";
import {
  FaBolt,
  FaCar,
  FaList,
  FaMagnifyingGlass,
  FaShield,
} from "react-icons/fa6";

import BuySellCard from "@/components/buy-sell/Card";
import { carsForSale } from "@/data/buySell";

const BuyCarPage = () => {
  return (
    <section id="buy-tab" className="tab-content py-8">
      <div className="container mx-auto px-6">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Premium Cars for Sale</h2>
              <p className="text-gray-600 dark:text-gray-400">
                <span id="car-count">6</span> cars available
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search */}
              <div className="relative flex-1 md:w-64">
                <FaMagnifyingGlass className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search cars..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Sort */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Sort:</span>
                <select
                  id="sort-select"
                  className="border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="default">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="year-new">Year: Newest First</option>
                  <option value="mileage-low">Mileage: Low to High</option>
                </select>
              </div>
            </div>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              data-filter="all"
              className="filter-btn active px-4 py-2 rounded-full bg-primary text-white"
            >
              All Cars
            </button>
            <button
              data-filter="certified"
              className="flex items-center gap-2 filter-btn px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <FaShield /> Certified
            </button>
            <button
              data-filter="electric"
              className="flex items-center gap-2 filter-btn px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <FaBolt /> Electric
            </button>
            <button
              data-filter="suv"
              className="flex items-center gap-2 filter-btn px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <FaCar /> SUVs
            </button>
            {/* View Toggle */}
            <div className="ml-auto flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
              <button
                id="view-grid"
                className="view-btn active text-white px-4 py-2 rounded-lg"
              >
                <FaThLarge />
              </button>
              <button
                id="view-list"
                className="view-btn px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300"
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsForSale.map((car) => (
            <BuySellCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyCarPage;
