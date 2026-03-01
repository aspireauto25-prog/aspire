import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import { IconType } from "react-icons";

import { CONTACT_ROUTE } from "@/constants/routes";
import Button from "../Button";

interface Props {
  service: {
    Icon: IconType;
    id: string;
    title: string;
    description: string;
    subsections?: {
      title: string;
      content?: string;
      items?: string[];
    }[];
  };
}

const ServiceBlock = ({ service }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
      <div className="p-3 rounded-xl bg-primary/10 mb-4 inline-block">
        <service.Icon className="text-3xl text-primary" />
      </div>

      <h3 className="text-3xl font-bold mb-6 text-primary">{service.title}</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        {service.description}
      </p>

      {service.subsections && service.subsections.length > 0 && (
        <div className="space-y-8 mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
          {service.subsections.map((sub, idx) => (
            <div key={idx} className="fade-in">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {sub.title}
              </h4>

              {sub.content && (
                <p className="text-gray-600 dark:text-gray-300 mb-4 ml-5">
                  {sub.content}
                </p>
              )}

              {sub.items && sub.items.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-5">
                  {sub.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 group">
                      <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <FaCheck className="text-primary text-xs" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Button
          href={`${CONTACT_ROUTE}?subject=Car Servicing and Maintenance&message=I would like to get ${service.title} for my car`}
          className="md:w-max"
        >
          <FaCalendarAlt /> Book This Service
        </Button>
      </div>
    </div>
  );
};

export default ServiceBlock;
