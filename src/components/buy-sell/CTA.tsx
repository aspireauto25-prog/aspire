import { FaMagnifyingGlass, FaTag } from "react-icons/fa6";
import Link from "next/link";

import { BUY_ROUTE, SELL_ROUTE } from "@/constants/routes";

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
          <Link
            href={BUY_ROUTE}
            className="flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <FaMagnifyingGlass /> Browse Cars
          </Link>
          <Link
            href={SELL_ROUTE}
            className="flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-primary transition-colors"
          >
            <FaTag /> Sell Your Car
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuySellCTA;
