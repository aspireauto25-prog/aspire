import { FaBolt, FaCar, FaShieldAlt, FaStar } from "react-icons/fa";
import Image from "next/image";

import { RENT_LIST_ROUTE } from "@/constants/routes";
import Button from "../Button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern -z-10" />
      {/* Animated shapes */}
      <div className="shape-1 top-20 right-20 float" />
      <div className="shape-2 bottom-20 left-20 float" />
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 slide-in-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm mb-6 pulse-slow">
              <span className="text-primary font-bold">
                Premium Car Rental Service
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Aspire
              <span className="inline-block gradient-text">Automotive</span>
              <br />
              Driven by
              <span className="inline-block text-primary animate-glow">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Drive smarter with our <strong>Hybrid Rental Fleet</strong> —
              combining Toyota reliability, advanced hybrid technology, and
              outstanding fuel economy. Enjoy lower fuel costs, reduced
              emissions, and a comfortable driving experience, whether for daily
              commuting or long-term hire.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                href={RENT_LIST_ROUTE}
                rounded
                className="bounce-slow shadow-2xl"
              >
                <FaCar /> Explore Our Fleet
              </Button>
            </div>
            {/* Floating stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center glass-effect p-6 rounded-2xl backdrop-blur-sm shadow-2xl shadow-primary/5 bg-gray-100">
                <div className="text-3xl font-bold text-primary counter">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Vehicles</div>
              </div>
              <div className="text-center glass-effect p-6 rounded-2xl backdrop-blur-sm shadow-2xl shadow-primary/5 bg-gray-100">
                <div
                  className="text-3xl font-bold text-primary counter"
                  data-target={98}
                >
                  98%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Satisfaction rate
                </div>
              </div>
              <div className="text-center glass-effect p-6 rounded-2xl backdrop-blur-sm shadow-2xl shadow-primary/5 bg-gray-100">
                <div
                  className="text-3xl font-bold text-primary counter"
                  data-target={24}
                >
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Road side assistance
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative slide-in-right">
            <div className="relative car-3d">
              {/* Main Car Display */}
              <div className="relative">
                {/* Car 1 - Tesla Model 3 */}
                <div className="hero-car relative">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Tesla Model 3"
                      className="car-model w-full max-w-2xl rounded-3xl aspect-square object-cover"
                      height={800}
                      width={1200}
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl">
                      <div className="text-center">
                        <div className="text-primary font-bold">FROM</div>
                        <div className="text-3xl font-bold">
                          $89<span className="text-lg">/day</span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Tesla Model 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Car 2 - BMW X5 */}
                <div className="hero-car hidden relative">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="BMW X5"
                      className="car-model w-full max-w-2xl rounded-3xl aspect-square object-cover"
                      height={800}
                      width={1200}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl">
                      <div className="text-center">
                        <div className="text-primary font-bold">FROM</div>
                        <div className="text-3xl font-bold">
                          $129<span className="text-lg">/day</span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          BMW X5
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Car 3 - Porsche 911 */}
                <div className="hero-car hidden relative">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Porsche 911"
                      className="car-model w-full max-w-2xl rounded-3xl aspect-square object-cover"
                      height={800}
                      width={1200}
                    />
                    <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl">
                      <div className="text-center">
                        <div className="text-primary font-bold">FROM</div>
                        <div className="text-3xl font-bold">
                          $199<span className="text-lg">/day</span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Porsche 911
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Car Indicators */}
                <div className="flex justify-center space-x-3 mt-8">
                  <div className="car-indicator active" />
                  <div className="car-indicator" />
                  <div className="car-indicator" />
                </div>
              </div>
              {/* Floating elements around cars */}
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center float">
                <FaBolt className="text-primary text-2xl" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center float">
                <FaShieldAlt className="text-primary text-2xl" />
              </div>
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl bounce-slow">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 text-xl mr-2" />
                  <div>
                    <div className="font-bold">4.8/5</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative line */}
            <div className="absolute top-1/2 left-0 w-16 h-0.5 bg-linear-to-r from-transparent to-primary/50 -translate-x-full hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
