import { FaCogs, FaGasPump, FaImage, FaUserFriends } from "react-icons/fa";
import Image from "next/image";

import { CONTACT_ROUTE, RENT_ROUTE } from "@/constants/routes";
import Button from "../Button";
import LinkButton from "../LinkButton";
import OutlinedLinkButton from "../OutlinedLinkButton";
import { RentalCarWithDetails } from "@/lib/types/rentalCar.types";
import CarStatus from "../car/Status";
import { CAR_STATUS_AVAILABLE } from "@/constants/cars";

interface Props extends RentalCarWithDetails {
  imageUrl?: string;
}

const RentCard = ({
  brand,
  category,
  daily_rate,
  features,
  fuel_type,
  id,
  images,
  model,
  seat_capacity,
  status,
  transmission_type,
  variant,
}: Props) => {
  const featuredImageUrl = images?.find((image) => image.featured)?.url;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 slide-up">
      <div className="relative h-48 overflow-hidden">
        {featuredImageUrl ? (
          <Image
            src={featuredImageUrl}
            alt={brand}
            className="w-full h-full object-cover"
            width={500}
            height={350}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-900">
            <FaImage className="text-7xl text-gray-300 dark:text-gray-700" />
          </div>
        )}
        <div className={`absolute top-4 right-4`}>
          <CarStatus status={status} />
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">
              {brand} {model} {variant}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{category}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {daily_rate}
              <span className="text-sm font-normal">/day</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center">
            <FaUserFriends className="mr-2" />
            <span>{seat_capacity} Seats</span>
          </div>
          <div className="flex items-center">
            <FaGasPump className="mr-2" />
            <span>{fuel_type}</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-2" />
            <span>{transmission_type}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {features?.slice(0, 4)?.map((feature) => (
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
          {status == CAR_STATUS_AVAILABLE ? (
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
