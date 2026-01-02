import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

import { RENT_ROUTE } from "@/constants/routes";
import LinkButton from "@/components/LinkButton";

interface Props {
  category: string;
  id: number;
  image: string;
  name: string;
  price: number;
}

const SimilarCarsCard = (props: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover"
        height={400}
        width={600}
      />
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2">{props.name}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {props.category}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            ${props.price}
            <span className="text-sm font-normal">/day</span>
          </div>
          <LinkButton href={`${RENT_ROUTE}/${props.id}`} size="md">
            View
            <FaArrowRight />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default SimilarCarsCard;
