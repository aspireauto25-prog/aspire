import { FaBars, FaCalendar, FaMoon } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

import { CONTACT_ROUTE, HOME_ROUTE } from "@/constants/routes";
import config from "@/config";
import navlinks from "@/constants/navlinks";

import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <nav className="glass-effect py-4 px-6 backdrop-blur-lg shadow-xl animate-slide-in-top">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Link href={HOME_ROUTE} className="flex items-center space-x-3">
                <Image
                  src={logo}
                  alt={config.appName}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden lg:flex space-x-8">
              {navlinks.map((navlink, index) => (
                <Link
                  key={index}
                  href={navlink.route}
                  className="font-medium hover:text-primary transition-colors relative group"
                >
                  {navlink.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <FaMoon />
              </button>
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
      </nav>
    </header>
  );
};

export default Header;
