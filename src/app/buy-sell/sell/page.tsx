import SellFeatures from "@/components/buy-sell/sell/Features";
import SellForm from "@/components/buy-sell/sell/Form";

const SellPage = () => {
  return (
    <section id="sell-tab" className="tab-content py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sell Your Car With AutoElite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get the best price for your car with our premium selling service
            </p>
          </div>
          <SellFeatures />
          {/* Sell Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Submit Your Car Details</h3>
            <SellForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellPage;
