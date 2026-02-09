"use client";

import { FaBars, FaCalendarAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { ADMIN_ROUTE, CONTACT_ROUTE, HOME_ROUTE } from "@/constants/routes";
import Button from "./Button";
import Logo from "./Logo";
import navlinks from "@/constants/navlinks";
import Theme from "./Theme";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();

  const isHomeRoute = pathname === HOME_ROUTE;
  const isAdminRoute = pathname.startsWith(ADMIN_ROUTE);

  if (isAdminRoute) return <></>;

  return (
    <header
      className={`${
        isHomeRoute
          ? "fixed w-full px-6 py-4"
          : "sticky glass-effect py-4 px-6 backdrop-blur-lg shadow-xl slide-in-top"
      } top-0 z-50`}
    >
      <div className="container mx-auto">
        <div
          className={`flex justify-between items-center ${
            isHomeRoute
              ? "glass-effect rounded-2xl px-6 py-3 backdrop-blur-lg shadow-xl slide-in-top"
              : ""
          }`}
        >
          <div className="flex items-center space-x-3">
            <Logo />
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
          <div className="flex items-center gap-4">
            <Theme />
            <Button
              href={`${CONTACT_ROUTE}#contact-form`}
              size="md"
              rounded
              className="hidden sm:flex"
            >
              <FaCalendarAlt />
              <span>Enquire Now</span>
            </Button>
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setShowMobileMenu(true)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
        {/* Mobile menu  */}
        {showMobileMenu && (
          <div className="bg-white dark:bg-gray-950 px-4 pt-2 pb-4 rounded-2xl mt-2" onClick={() => setShowMobileMenu(false)}>
            <nav className="flex flex-col lg:hidden">
              {navlinks.map((navlink, index) => {
                const isActive = pathname === navlink.route;

                return (
                  <Link
                    key={index}
                    href={navlink.route}
                    className={`font-medium hover:text-primary transition-colors relative group py-2 ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    {navlink.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                );
              })}
            </nav>
            <Button
              href={`${CONTACT_ROUTE}#contact-form`}
              size="md"
              rounded
              className="flex sm:hidden mt-4"
            >
              <FaCalendarAlt />
              <span>Enquire Now</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
