import { FaMagnifyingGlass } from "react-icons/fa6";

import { features, rentCars } from "@/data/rent";
import Hero from "@/components/Hero";
import RentCard from "@/components/rent/Card";
import RentCTA from "@/components/rent/CTA";
import RentFeature from "@/components/rent/Feature";

import heroBg from "@/assets/images/rent-hero-bg.jpg";

const RentPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Explore Our <span className="gradient-text">Premium Fleet</span>
          </>
        }
        subtitle="Choose from our extensive collection of luxury, economy, and electric vehicles"
        backgroundImage={heroBg}
        action={
          <div className="md:w-2xl mx-auto relative">
            <FaMagnifyingGlass className="absolute left-6 top-5 text-gray-400" />
            <input
              type="text"
              id="search-input"
              placeholder="Search cars by name or category..."
              className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="right-3 top-2.5 btn-primary px-6 py-2 rounded-full absolute">
              Search
            </button>
          </div>
        }
      />

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              {/* Results Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold">
                    Available Cars (<span id="car-count">12</span>)
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Select from our premium collection
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Sort by:
                    </span>
                    <select
                      id="sort-select"
                      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2"
                    >
                      <option value="default">Default</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Rating</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Cars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentCars.map((data) => (
                  <RentCard key={data.id} {...data} />
                ))}
              </div>
              {/* Load More (if needed) */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 rounded-full font-bold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  Load More Cars <i className="fas fa-arrow-down ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RentCTA />

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AutoElite?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We make car rental simple, reliable, and premium
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <RentFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RentPage;
