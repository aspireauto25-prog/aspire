"use client";
import { FaBullhorn, FaMagnifyingGlass, FaTag } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { BUY_ROUTE, SELL_ROUTE, WANTED_ROUTE } from "@/constants/routes";

const tabs = [
  {
    icon: FaMagnifyingGlass,
    label: "Buy Cars",
    route: BUY_ROUTE,
  },
  {
    icon: FaTag,
    label: "Sell Your Car",
    route: SELL_ROUTE,
  },
  {
    icon: FaBullhorn,
    label: "Cars Wanted",
    route: WANTED_ROUTE,
  },
];

const BuySellTabs = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-20 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-2 py-4">
          {tabs.map((tab) => (
            <Link
              key={tab.route}
              href={tab.route}
              className={`tab-btn px-6 py-3 rounded-full font-bold flex items-center gap-2 ${
                pathname == tab.route
                  ? "active bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <tab.icon /> {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuySellTabs;
