import { FaMagnifyingGlass, FaTag } from "react-icons/fa6";

import { BUY_ROUTE, SELL_ROUTE } from "@/constants/routes";
import Button from "../Button";

const BuySellCTA = () => {
  return (
    <section className="py-16 bg-linear-to-r from-primary to-red-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Buy or Sell?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust AutoElite for their
          car transactions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            href={BUY_ROUTE}
            rounded
            theme="light"
            className="hover:scale-105"
          >
            <FaMagnifyingGlass /> Browse Cars
          </Button>
          <Button href={SELL_ROUTE} rounded>
            <FaTag /> Sell Your Car
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuySellCTA;
