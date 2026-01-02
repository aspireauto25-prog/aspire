"use client";

import { FaBars, FaCalendar } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { CONTACT_ROUTE, HOME_ROUTE } from "@/constants/routes";
import config from "@/config";
import navlinks from "@/constants/navlinks";
import Theme from "./Theme";


import logo from "@/assets/images/logo.png";

const Header = () => {
  const pathname = usePathname();

  const isHomeRoute = pathname === HOME_ROUTE;

  return (
    <header
      className={`${
        isHomeRoute
          ? "fixed w-full px-4 py-6"
          : "sticky glass-effect py-4 px-6 backdrop-blur-lg shadow-xl animate-slide-in-top"
      } top-0 z-50`}
    >
      <div className="container mx-auto">
        <div
          className={`flex justify-between items-center ${
            isHomeRoute
              ? "glass-effect rounded-2xl px-6 py-3 backdrop-blur-lg shadow-xl animate-slide-in-top"
              : ""
          }`}
        >
          <div className="flex items-center space-x-3">
            <Link href={HOME_ROUTE} className="flex items-center space-x-3">
              <Image src={logo} alt={config.appName} className="h-12 w-auto" />
            </Link>
          </div>
          <nav className="hidden lg:flex space-x-8">
            {navlinks.map((navlink, index) => {
              const isActive = pathname === navlink.route;

              return (
                <Link
                  key={index}
                  href={navlink.route}
                  className={`font-medium hover:text-primary transition-colors relative group ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {navlink.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center space-x-4">
            <Theme />
            <Link
              href={`${CONTACT_ROUTE}#contact-form`}
              className="btn-primary px-6 py-3 rounded-full font-bold shadow-lg items-center gap-2 hidden sm:flex"
            >
              <FaCalendar />
              <span>Book Now</span>
            </Link>
            <button className="lg:hidden">
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
