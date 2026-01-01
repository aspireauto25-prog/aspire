import { IconType } from "react-icons";
import Link from "next/link";

import { CONTACT_ROUTE } from "@/constants/routes";
import { FaCarCrash, FaOilCan, FaTools } from "react-icons/fa";

interface Props {
  description: string;
  Icon: IconType;
  info: string;
  label: string;
  price: string;
}

const servicing = [
  {
    description:
      "Includes oil change, filter replacement, and 30-point inspection",
    Icon: FaOilCan,
    info: "Complete checkup and servicing",
    label: "Regular Maintenance",
    price: "Starting at $99",
  },
  {
    description: "Complete system scan and detailed report",
    Icon: FaTools,
    info: "Advanced computer diagnostics",
    label: "Diagnostic Services",
    price: "Starting at $149",
  },
  {
    description: "Quick response and on-site repairs available",
    Icon: FaCarCrash,
    info: "24/7 breakdown assistance",
    label: "Emergency Repairs",
    price: "Emergency Service",
  },
];

const Card = ({ description, info, label, price, Icon }: Props) => {
  return (
    <div className="card-3d relative h-96">
      <div className="card-3d-inner w-full h-full">
        <div className="card-front bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-center items-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <Icon className="text-primary text-4xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{label}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">{info}</p>
        </div>
        <div className="card-back bg-primary rounded-3xl p-8 shadow-2xl flex flex-col justify-center items-center text-white">
          <h3 className="text-2xl font-bold mb-4">{price}</h3>
          <p className="text-center mb-6">{description}</p>
          <Link
            href={CONTACT_ROUTE}
            className="px-6 py-3 bg-white text-primary rounded-full font-bold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const Servicing = () => {
  return (
    <section
      id="servicing"
      className="py-20 bg-linear-to-b from-gray-100 to-light dark:from-gray-900 dark:to-dark"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold">EXPERT SERVICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-primary">Car Servicing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Keep your vehicle in perfect condition with our certified
            technicians and state-of-the-art equipment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicing.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicing;
