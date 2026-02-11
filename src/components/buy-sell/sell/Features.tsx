import { FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";

const SellFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
          <FaChartLine className="text-primary text-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-4">Best Price Guarantee</h3>
        <p className="text-gray-600 dark:text-gray-300">
          We&apos;ll match or beat any verified offer
        </p>
      </div>
      <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
          <FaBolt className="text-primary text-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-4">Quick Sale</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Sell your car in as little as 24 hours
        </p>
      </div>
      <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
          <FaShieldAlt className="text-primary text-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-4">Secure Transaction</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Protected payments and paperwork
        </p>
      </div>
    </div>
  );
};

export default SellFeatures;
