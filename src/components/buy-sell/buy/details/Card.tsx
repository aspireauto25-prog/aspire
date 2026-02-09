import { FaArrowRight, FaImage } from "react-icons/fa6";
import Image from "next/image";

import { RENT_ROUTE } from "@/constants/routes";
import { RentalCarWithDetails } from "@/lib/types/rentalCar.types";
import Button from "@/components/Button";

const SimilarCarsCard = (props: RentalCarWithDetails) => {
  const featuredImageUrl = props.images?.find((image) => image.featured)?.url;

  const carName = `${props.brand} ${props.model} ${props.variant}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {featuredImageUrl ? (
        <Image
          src={featuredImageUrl}
          alt={carName}
          className="w-full h-48 object-cover"
          height={400}
          width={600}
        />
      ) : (
        <div className="flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-900">
          <FaImage className="text-7xl text-gray-300 dark:text-gray-700" />
        </div>
      )}
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2">{carName}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {props.category}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            ${props.daily_rate}
            <span className="text-sm font-normal">/day</span>
          </div>
          <Button href={`${RENT_ROUTE}/${props.id}`} size="md">
            View
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimilarCarsCard;
