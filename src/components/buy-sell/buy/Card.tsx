import {
  FaCar,
  FaCheck,
  FaExclamationCircle,
  FaImage,
  FaRegCalendarAlt,
  FaRoad,
} from "react-icons/fa";
import Image from "next/image";

import { BUY_ROUTE, CONTACT_ROUTE } from "@/constants/routes";
import { SaleCarWithDetails } from "@/lib/types/saleCar.types";
import Button from "@/components/Button";
import OutlinedButton from "@/components/OutlinedButton";

const BuyCard = (props: SaleCarWithDetails) => {
  const featuredImageUrl = props.images?.find((image) => image.featured)?.url;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 slide-up">
      <div className="relative h-48 overflow-hidden">
        {featuredImageUrl ? (
          <Image
            src={featuredImageUrl}
            alt={props.brand}
            className="w-full h-48 object-cover"
            width={600}
            height={400}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-900">
            <FaImage className="text-7xl text-gray-300 dark:text-gray-700" />
          </div>
        )}
        {/* {props.urgency ? (
          <div
            className={`absolute top-4 left-4 ${urgencyClass} text-white px-3 py-1 rounded-full text-sm font-bold`}
          >
            {urgencyText}
          </div>
        ) : null} */}
        {/* {props.certified ? (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
            <FaShieldAlt className="fas fa-shield-alt mr-1" /> Certified
          </div>
        ) : null}*/}
        {props.discount_price && (
          <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Save ${props?.discount_price.toLocaleString()}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 truncate">
          {props.brand} {props.model} {props.variant}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
            <FaCar />
            {props.category}
          </span>
          <span className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
            <FaRegCalendarAlt />
            {props.year}
          </span>
          {props.mileage && (
            <span className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
              <FaRoad />
              {props.mileage} km
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-3 mb-4">
          <div className="text-2xl font-bold text-primary">
            ${(props.full_price - (props.discount_price ?? 0)).toLocaleString()}
          </div>
          {props.discount_price && (
            <div className="text-gray-400 line-through">
              ${props.full_price.toLocaleString()}
            </div>
          )}
        </div>
        {props.features && (
          <div className="flex flex-wrap gap-2 mb-6">
            {props.features?.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs flex items-center"
              >
                <FaCheck className="fas fa-check mr-1" />
                {feature}
              </span>
            ))}

            {props.features?.length > 2 ? (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
                +{props.features.length - 2} more
              </span>
            ) : null}
          </div>
        )}
        <div className="flex space-x-3">
          <Button
            size="md"
            href={`${BUY_ROUTE}/${props.id}`}
            className="flex-1"
          >
            <FaExclamationCircle className="text-xl" /> View Details
          </Button>
          <OutlinedButton href={CONTACT_ROUTE} size="md">
            Contact
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
