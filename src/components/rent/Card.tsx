import {
  FaCalendarAlt,
  FaCar,
  FaCheck,
  FaCogs,
  FaGasPump,
  FaImage,
  FaInfoCircle,
  FaRegCalendarAlt,
  FaRoad,
  FaUserFriends,
} from "react-icons/fa";
import Image from "next/image";

import { CAR_STATUS_AVAILABLE } from "@/constants/cars";
import { CONTACT_ROUTE, RENT_ROUTE } from "@/constants/routes";
import { RentalCarWithDetails } from "@/lib/types/rentalCar.types";
import Button from "../Button";
import CarStatus from "../car/Status";
import OutlinedButton from "../OutlinedButton";

const RentCard = ({
  brand,
  category,
  daily_rate,
  features,
  fuel_type,
  id,
  images,
  mileage,
  model,
  seat_capacity,
  status,
  transmission_type,
  variant,
  weekly_rate,
  year,
}: RentalCarWithDetails) => {
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
        <div className="flex justify-between items-start mb-4 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-1">
              {brand} {model} {variant}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
                <FaCar />
                {category}
              </span>
              <span className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
                <FaRegCalendarAlt />
                {year}
              </span>
              {mileage && (
                <span className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
                  <FaRoad />
                  {mileage} km
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {daily_rate}
              <span className="text-sm font-normal">/day</span>
            </div>
            <div className="flex items-center justify-end mt-1">
              <span className="font-semibold">{weekly_rate}</span>
              <span className="text-xs">/week</span>
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

        {features && (
          <div className="flex flex-wrap gap-2 mb-6">
            {features?.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs flex items-center"
              >
                <FaCheck className="fas fa-check mr-1" />
                {feature}
              </span>
            ))}
            {features?.length > 2 ? (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
                +{features?.length - 2} more
              </span>
            ) : null}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-3">
          <Button size="md" href={`${RENT_ROUTE}/${id}`} className="flex-1">
            <FaInfoCircle className="text-xl" /> View Details
          </Button>
          {status == CAR_STATUS_AVAILABLE ? (
            <OutlinedButton href={CONTACT_ROUTE} size="md">
              <FaCalendarAlt /> Book Now
            </OutlinedButton>
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
