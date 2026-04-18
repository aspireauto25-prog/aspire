import { FaHandshake, FaSearch, FaShieldAlt, FaTruck } from "react-icons/fa";

const BuySellWhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Buy/Sell With Aspire Automotive?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by thousands of car buyers and sellers nationwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <FaSearch className="fas fa-search text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">100-Point Inspection</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every car undergoes rigorous inspection
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <FaShieldAlt className="fas fa-shield-alt text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">1-3 Months Warranty</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Extended warranty option available
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <FaHandshake className="fas fa-handshake text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hassle-Free Paperwork</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We handle all documentation
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <FaTruck className="fas fa-truck text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Statewide Delivery</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get your car delivered anywhere within the state
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySellWhyChooseUs;
