import {
  FaCar,
  FaCarSide,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaGasPump,
  FaHome,
  FaMapMarkedAlt,
  FaRoute,
} from "react-icons/fa";
import Link from "next/link";

import {
  BUY_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  RENT_LIST_ROUTE,
  SELL_ROUTE,
} from "@/constants/routes";
import Button from "@/components/Button";
import OutlinedLinkButton from "@/components/OutlinedLinkButton";

const NotFoundPage = () => {
  return (
    <main className="grow flex items-center justify-center py-12 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="relative">
              <span className="text-9xl font-black text-primary opacity-20">
                404
              </span>
              <div className="absolute top-0 left-0">
                <h2 className="text-6xl md:text-7xl font-black">Oops!</h2>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-gray-300">
                  Page Not Found
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-lg mt-16 mb-8">
              It looks like you&apos;ve taken a wrong turn. The page you&apos;re
              looking for might have been moved, deleted, or perhaps it&apos;s
              just taking a detour.
            </p>
            <div className="space-y-4">
              <p className="flex flex-col lg:flex-row gap-2 text-gray-700 dark:text-gray-500">
                <div className="flex items-center gap-2">
                  <FaExclamationCircle className="text-primary" />
                  <span className="font-medium">Possible reasons:</span>
                </div>
                <span>
                  The URL might be misspelled or the page no longer exists.
                </span>
              </p>
              <p className="flex gap-2 flex-col lg:flex-row text-gray-700 dark:text-gray-500">
                <div className="flex items-center gap-2">
                  <FaCar className="text-primary" />
                  <span className="font-medium">Meanwhile:</span>
                </div>
                <span>
                  Let&apos;s get you back on the road to finding the perfect
                  rental car.
                </span>
              </p>
            </div>
            <div className="mt-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <Button href={HOME_ROUTE}>
                <FaHome />
                Go to Homepage
              </Button>
              <OutlinedLinkButton href={RENT_LIST_ROUTE}>
                <FaCar />
                Browse Our Cars
              </OutlinedLinkButton>
            </div>
            <div className="mt-12">
              <p className="text-gray-600 mb-3">
                Or try one of these popular pages:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={BUY_ROUTE}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-500 transition-colors"
                >
                  Buy Premium Cars
                </Link>
                <Link
                  href={SELL_ROUTE}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-500 transition-colors"
                >
                  Sell Your Car
                </Link>
                <Link
                  href={CONTACT_ROUTE}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-500 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
          {/* Right visual */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              {/* Car graphic */}
              <div className="flex flex-col items-center justify-center mb-12">
                <FaCarSide className="text-8xl text-primary bounce-slow" />
                <div className="border-2 w-60 border-dashed" />
              </div>
              {/* Map graphic */}
              <div className="relative bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full font-semibold flex gap-2 items-center justify-center whitespace-nowrap">
                    <FaMapMarkedAlt /> Lost in Navigation
                  </div>
                </div>
                <div className="flex justify-center mt-4 mb-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                      <FaExclamationTriangle className="text-5xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-300">
                      Navigation Error
                    </h4>
                    <p className="text-gray-600 dark:text-gray-500 mt-2">
                      Destination not found
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                <FaRoute className="text-3xl text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                <FaGasPump className="text-2xl text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
