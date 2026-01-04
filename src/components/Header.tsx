"use client";

import { FaBars, FaCalendarAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ADMIN_ROUTE, CONTACT_ROUTE, HOME_ROUTE } from "@/constants/routes";
import LinkButton from "./LinkButton";
import Logo from "./Logo";
import navlinks from "@/constants/navlinks";
import Theme from "./Theme";

const Header = () => {
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
            <LinkButton
              href={`${CONTACT_ROUTE}#contact-form`}
              size="md"
              rounded
              className="hidden sm:flex"
            >
              <FaCalendarAlt />
              <span>Enquire Now</span>
            </LinkButton>
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
