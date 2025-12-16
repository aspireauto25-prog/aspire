import Image from "next/image";

import logo from "@/assets/images/logo.png";
import config from "@/config";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 py-4 px-6">
      <nav>
        <div className="container mx-auto">
          <div className="flex justify-between items-center glass-effect rounded-2xl px-6 py-3 backdrop-blur-lg shadow-xl animate-slide-in-top">
            <div className="flex items-center space-x-3">
              <a href="#">
                <Image
                  src={logo}
                  alt={config.appName}
                  className="h-12 w-auto"
                />
              </a>
            </div>

            <div className="hidden lg:flex space-x-8">
              <a
                href="index.html"
                className="font-medium text-primary transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="about.html"
                className="font-medium hover:text-primary transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="cars.html"
                className="font-medium hover:text-primary transition-colors relative group"
              >
                Our Fleet
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#booking"
                className="font-medium hover:text-primary transition-colors relative group"
              >
                Booking
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="servicing.html"
                className="font-medium hover:text-primary transition-colors relative group"
              >
                Servicing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="contact.html"
                className="font-medium hover:text-primary transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
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
