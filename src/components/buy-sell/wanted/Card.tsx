import {
  FaClock,
  FaHandshake,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";

import Button from "@/components/Button";

interface Props {
  brand: string;
  model: string;
  year: string;
  maxPrice: number;
  location: string;
  timeframe: string;
  contact: string;
}

const WantedCard = (props: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg slide-up">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">
            {props.brand} {props.model}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Year: {props.year} | Budget: ${props.maxPrice.toLocaleString()}
          </p>
        </div>
        <span className="px-3 py-1 bg-warning/20 text-warning rounded-full text-sm font-bold flex items-center">
          <FaSearch className="mr-1" /> Looking
        </span>
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-primary mr-3" />
          <span>Location: {props.location}</span>
        </div>
        <div className="flex items-center">
          <FaClock className="text-primary mr-3" />
          <span>Timeframe: {props.timeframe}</span>
        </div>
        <div className="flex items-center">
          <FaUser className="text-primary mr-3" />
          <span>Contact: {props.contact}</span>
        </div>
      </div>
      <Button size="md" className="w-full">
        <FaHandshake /> I Have This Car
      </Button>
    </div>
  );
};

export default WantedCard;
