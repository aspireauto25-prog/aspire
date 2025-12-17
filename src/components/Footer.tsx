import Image from "next/image";

import { socialLinks } from "@/data/contact";
import config from "@/config";
import logoLight from "@/assets/images/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full opacity-5 -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-5 translate-x-48 translate-y-48" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={logoLight}
                className="w-auto h-12"
                alt={config.appName}
              />
            </div>
            <p className="text-gray-400 mb-6">
              Premium car rental and servicing solutions for modern travelers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="index.html"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="cars.html"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Our Fleet
                </a>
              </li>
              <li>
                <a
                  href="index.html#booking"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="servicing.html"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Servicing
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Short Term Rental
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Long Term Rental
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Corporate Leasing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Car Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  24/7 Roadside
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mr-3 mt-1" />
                <span className="text-gray-400">
                  29 Foxwood Way, Langford WA 6147
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary mr-3" />
                <span className="text-gray-400">0497790788</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3" />
                <span className="text-gray-400">info@aspireauto.com.au</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-primary mr-3" />
                <span className="text-gray-400">24/7 Service Available</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 {config.appName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
