import { FaTachometerAlt, FaTools } from "react-icons/fa";
import Link from "next/link";

import { CONTACT_ROUTE } from "@/constants/routes";

interface Props {
  mileage: string;
  services: string[];
}

const MaintenanceSchedule = ({ mileage, services }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg slide-up">
      <div className="flex items-start mb-4">
        <div className="min-w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <FaTachometerAlt className="text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-lg">{mileage}</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {services.map((service) => (
              <span
                key={service}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Link
        href={`${CONTACT_ROUTE}?subject=Car Servicing and Maintenance`}
        className="text-primary hover:underline font-medium flex items-center gap-2"
      >
        <FaTools /> Schedule Service
      </Link>
    </div>
  );
};

export default MaintenanceSchedule;
