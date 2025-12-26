import { FaCalendarCheck, FaCheck, FaClock, FaCircleInfo } from "react-icons/fa6";

interface Props {
  duration: string;
  features: string[];
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
    <div
      className={`service-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up ${
        popular ? "border-2 border-primary" : ""
      }`}
    >
      <div className="p-8">
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
              <FaCheck className="text-primary mr-3" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-xl">
          <p className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
            <FaCircleInfo className="text-primary mr-2" />
            {recommendedFor}
          </p>
        </div>
        <button
          className={`w-full flex items-center justify-center ${
            popular
              ? "btn-primary"
              : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
          } py-3 rounded-xl font-bold transition-colors`}
        >
          <FaCalendarCheck className="mr-2" /> Book This Service
        </button>
      </div>
    </div>
  );
};

export default ServicingPackage;
