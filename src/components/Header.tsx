import Image from "next/image";
import Link from "next/link";

import { HOME_ROUTE } from "@/constants/routes";
import config from "@/config";
import navlinks from "@/constants/navlinks";

import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 py-4 px-6">
      <nav>
        <div className="container mx-auto">
          <div className="flex justify-between items-center glass-effect rounded-2xl px-6 py-3 backdrop-blur-lg shadow-xl animate-slide-in-top">
            <div className="flex items-center space-x-3">
              <Link href={HOME_ROUTE}>
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-primary px-6 py-3 rounded-full font-bold shadow-lg">
                <i className="fas fa-calendar-alt mr-2"></i> Book Now
              </button>
              <button className="lg:hidden">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
