import {
  FaCalendarCheck,
  FaCheck,
  FaClock,
  FaCircleInfo,
  FaCrown,
} from "react-icons/fa6";

import Button from "../Button";
import OutlinedButton from "../OutlinedButton";

interface Props {
  duration: string;
  features: (string | string[])[];
  name: string;
  popular?: boolean;
  price: number;
  recommendedFor: string;
}

const ServicingPackage = ({
  duration,
  features,
  name,
  popular,
  price,
  recommendedFor,
}: Props) => {
  return (
    <>
      <div
        className={`service-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 slide-up ${
          popular ? "border-2 border-primary relative" : ""
        }`}
      >
        {popular && (
          <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-xl flex items-center">
            <FaCrown className="mr-2" /> Most Popular
          </div>
        )}
        <div className="px-8 py-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <FaClock className="mr-2" />
              <span>{duration}</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-primary">${price}</div>
            <p className="text-gray-600 dark:text-gray-400">One-time service</p>
          </div>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {Array.isArray(feature) ? (
                  <ul className="ml-5">
                    {feature.map((item) => (
                      <li key={item} className="flex items-center ">
                        <FaCheck className="text-primary mr-3 text-xs" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <FaCheck className="text-primary mr-3" />
                    <span>{feature}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-xl">
            <p className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
              <FaCircleInfo className="text-primary mr-2" />
              {recommendedFor}
            </p>
          </div>
          {popular ? (
            <Button size="md" className="w-full">
              <FaCalendarCheck className="mr-2" /> Book This Service
            </Button>
          ) : (
            <OutlinedButton size="md" className="w-full">
              <FaCalendarCheck /> Book This Service
            </OutlinedButton>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicingPackage;
