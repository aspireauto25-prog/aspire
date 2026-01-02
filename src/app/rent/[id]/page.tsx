import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaLock,
  FaPrint,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { carData } from "@/data/carDetails";
import { CONTACT_ROUTE } from "@/constants/routes";
import { formatSpecKey } from "@/helpers/textFormatter";
import RentDetailsBreadCrumb from "@/components/rent/details/BreadCrumb";
import SimilarCarsCard from "@/components/rent/details/Card";

const CarDetailsPage = () => {
  return (
    <>
      <RentDetailsBreadCrumb car="Tesla" />
      {/* Car Details Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images & Videos */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="main-image-container rounded-2xl overflow-hidden shadow-2xl relative zoom-in">
                <Image
                  id="main-image"
                  alt="Tesla Model 3"
                  src={carData.images[0]}
                  width={800}
                  height={550}
                  className="w-full h-full object-cover"
                />
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                  <FaChevronLeft />
                </button>
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                  <FaChevronRight />
                </button>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                    <FaHeart id="favorite-heart" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                    <FaShare />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                    <FaPrint />
                  </button>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="mt-4">
                <div
                  id="thumbnails"
                  className="flex space-x-4 overflow-x-auto custom-scrollbar pb-2"
                >
                  {carData.images.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
                        index === 0 ? " border-primary" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image}
                        className="w-full h-full object-cover"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Detailed Description */}
              <div className="mt-12 slide-up">
                <h3 className="text-2xl font-bold mb-6">
                  Detailed Description
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {carData.description}
                </div>
              </div>
              {/* Features */}
              <div className="mt-12 slide-up">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <ul
                  id="features-list"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {carData.features.map((feature) => (
                    <li key={feature} className="flex items-center mb-3">
                      <FaCheck className="text-primary mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Specifications */}
              <div className="mt-12 slide-up">
                <h3 className="text-2xl font-bold mb-6">
                  Technical Specifications
                </h3>
                <div
                  id="specifications-list"
                  className="spec-table bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  {Object.entries(carData.specifications).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800"
                      >
                        <span className="text-gray-600 dark:text-gray-400">
                          {formatSpecKey(key)}
                        </span>
                        <span className="font-bold">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {/* Car Info Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 id="car-name" className="text-3xl font-bold mb-2">
                      {carData.name}
                    </h1>
                    <p
                      id="car-category"
                      className="text-gray-600 dark:text-gray-400 mb-4"
                    >
                      {carData.category}
                    </p>
                    <div className="flex items-center mb-4">
                      <div
                        id="car-rating"
                        className="text-2xl font-bold mr-2 flex items-center gap-2"
                      >
                        {carData.rating}
                        <FaStar className="text-yellow-400 text-3xl" />
                      </div>
                      <span
                        id="car-review-count"
                        className="text-gray-600 dark:text-gray-400"
                      >
                        ({carData.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      id="car-price"
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      ${carData.price}
                      <span className="text-lg">/day</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Per day
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Year
                    </div>
                    <div id="car-year" className="font-bold text-lg">
                      {carData.year}
                    </div>
                  </div>
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Mileage
                    </div>
                    <div id="car-mileage" className="font-bold text-lg">
                      {carData.mileage}
                    </div>
                  </div>
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Condition
                    </div>
                    <div id="car-condition" className="font-bold text-lg">
                      {carData.condition}
                    </div>
                  </div>
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Availability
                    </div>
                    <div
                      id="availability-badge"
                      className={`px-4 py-2 rounded-full text-sm font-bold  ${
                        carData.availability == "Available"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      } `}
                    >
                      {carData.availability}
                    </div>
                  </div>
                </div>
                <p
                  id="car-description-short"
                  className="text-gray-600 dark:text-gray-300 mb-6"
                >
                  Experience the future of driving with this all-electric luxury
                  sedan.
                </p>
              </div>
              {/* Booking Form */}
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-2xl font-bold mb-6">Book This Car</h3>
                <div className="space-y-4">
                  <Link
                    href={CONTACT_ROUTE}
                    className="w-full btn-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaLock /> Book Now
                  </Link>
                  <div id="booking-success" className="hidden" />
                </div>
              </div>
              {/* What's Included */}
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  What&apos;s Included
                </h3>
                <ul id="includes-list">
                  {carData.includes.map((include, index) => (
                    <li key={index} className="flex items-center mb-3 p-1">
                      <FaCheckCircle className="text-primary mr-3" />
                      <span>{include}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Requirements */}
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-2xl font-bold mb-6">Rental Requirements</h3>
                <ul id="requirements-list">
                  {carData.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center mb-3 p-1">
                      <FaInfoCircle className="text-primary mr-3" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Similar Cars Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Similar Cars You Might Like
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out these similar vehicles in our premium fleet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carData.similarCars.map((car, index) => (
              <SimilarCarsCard key={index} {...car} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetailsPage;
