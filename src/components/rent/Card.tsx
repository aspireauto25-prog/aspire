import { FaCogs, FaGasPump, FaStar, FaUserFriends } from "react-icons/fa";
import Image from "next/image";

import { CONTACT_ROUTE, RENT_ROUTE } from "@/constants/routes";
import Button from "../Button";
import LinkButton from "../LinkButton";
import OutlinedLinkButton from "../OutlinedLinkButton";

interface Props {
  available: boolean;
  category: string;
  features: string[];
  fuel: string;
  id: number;
  image: string;
  name: string;
  popular: boolean;
  price: number;
  rating: number;
  seats: number;
  transmission: string;
}

const RentCard = ({
  available,
  category,
  features,
  fuel,
  id,
  image,
  name,
  popular,
  price,
  rating,
  seats,
  transmission,
}: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 slide-up">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          width={500}
          height={350}
        />
        {popular ? (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
            Popular
          </div>
        ) : null}
        <div
          className={`absolute top-4 right-4 ${
            available
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
          } px-3 py-1 rounded-full text-sm font-bold`}
        >
          {available ? "Available" : "Unavailable"}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{category}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {price}
              <span className="text-sm font-normal">/day</span>
            </div>
            <div className="flex items-center justify-end mt-1">
              <FaStar className="text-yellow-400" />
              <span className="ml-1 text-sm">{rating}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center">
            <FaUserFriends className="mr-2" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center">
            <FaGasPump className="mr-2" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-2" />
            <span>{transmission}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <LinkButton size="md" href={`${RENT_ROUTE}/${id}`} className="flex-1">
            View Details
          </LinkButton>
          {available ? (
            <OutlinedLinkButton href={CONTACT_ROUTE} size="md">
              Book Now
            </OutlinedLinkButton>
          ) : (
            <Button
              disabled={true}
              theme="light"
              size="md"
              className="border-2 border-gray-400"
            >
              Unavailable
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentCard;
