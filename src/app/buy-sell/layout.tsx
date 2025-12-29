import { FaBullhorn, FaMagnifyingGlass, FaTag } from "react-icons/fa6";
import Link from "next/link";

import BuySellCTA from "@/components/buy-sell/CTA";
import BuySellWhyChooseUs from "@/components/buy-sell/WhyChooseUs";
import Hero from "@/components/Hero";

import heroBg from "@/assets/images/buy-sell-bg.jpg";

const BuySellLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Hero
        backgroundImage={heroBg}
        subtitle="Find your dream car or sell your vehicle with confidence through
              our trusted platform."
        title={
          <>
            Buy &amp; Sell <span className="gradient-text">Premium</span> Cars
          </>
        }
        action={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-gray-300">Cars Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-gray-300">Quick Sale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Verified</div>
            </div>
          </div>
        }
      />

      <div className="sticky top-20 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 py-4">
            <Link
              href="buy"
              className="tab-btn active bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2"
            >
              <FaMagnifyingGlass /> Buy Cars
            </Link>
            <Link
              href="sell"
              className="tab-btn bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-bold flex items-center gap-2"
            >
              <FaTag /> Sell Your Car
            </Link>
            <Link
              href="wanted"
              className="tab-btn bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-bold flex items-center gap-2"
            >
              <FaBullhorn /> Cars Wanted
            </Link>
          </div>
        </div>
      </div>

      {children}

      <BuySellCTA />
      <BuySellWhyChooseUs />
    </>
  );
};

export default BuySellLayout;
