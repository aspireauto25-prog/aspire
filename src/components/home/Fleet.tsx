import {
  FaCheck,
  FaCogs,
  FaGasPump,
  FaInfoCircle,
  FaStar,
  FaTachometerAlt,
  FaUserFriends,
} from "react-icons/fa";
import Image from "next/image";

import { CONTACT_ROUTE, RENT_ROUTE } from "@/constants/routes";
import { cars } from "@/data/home";
import Button from "../Button";
import OutlinedLinkButton from "../OutlinedLinkButton";

interface Props {
  available: boolean;
  category: string;
  description: string;
  fuel: string;
  horsepower: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  seats: number;
  transmission: string;
}

const Card = (props: Props) => {
  return (
    <div className="detailed-car-card bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl slide-up border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          height={600}
          width={800}
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
          ${props.price}
          <span className="text-sm font-normal">/day</span>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm flex items-center gap-1">
          {props.rating}
          <FaStar className=" text-yellow-400 ml-1"></FaStar>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">{props.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{props.category}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              props.available
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
            }`}
          >
            {props.available ? "Available" : "Booked"}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
          {props.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl flex flex-col items-center">
            <FaUserFriends className="text-primary text-2xl mb-2" />
            <div className="font-bold">{props.seats} Seats</div>
          </div>
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl flex flex-col items-center">
            <FaGasPump className="text-primary text-2xl mb-2" />
            <div className="font-bold">{props.fuel}</div>
          </div>
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl flex flex-col items-center">
            <FaCogs className="text-primary text-2xl mb-2" />
            <div className="font-bold">{props.transmission}</div>
          </div>
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl flex flex-col items-center">
            <FaTachometerAlt className="text-primary text-2xl mb-2" />
            <div className="font-bold">{props.horsepower}</div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button href={`${RENT_ROUTE}/${props.id}`} className="flex-1">
            <FaInfoCircle /> Details
          </Button>
          <OutlinedLinkButton href={CONTACT_ROUTE}>
            <FaCheck /> Book
          </OutlinedLinkButton>
        </div>
      </div>
    </div>
  );
};

const Fleet = () => {
  return (
    <section
      id="cars"
      className="py-20 bg-linear-to-b from-light to-gray-100 dark:from-dark dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold">OUR PREMIUM FLEET</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Detailed Car <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our meticulously maintained fleet with detailed
            specifications, features, and availability.
          </p>
        </div>
        {/* Car Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 slide-up">
          <button className="px-6 py-3 rounded-full bg-primary text-white font-bold">
            All Cars
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            Sedans
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            SUVs
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            Luxury
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white font-bold transition-colors">
            Electric
          </button>
        </div>
        <div
          id="detailed-cars-container"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {cars.map((car, index) => (
            <Card key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
