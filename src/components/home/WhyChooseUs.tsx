import { FaClock, FaDollarSign, FaShieldAlt, FaTools } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  description: string;
  label: string;
}

const reasons = [
  {
    Icon: FaShieldAlt,
    description:
      "Buy, sell, or rent with confidence — complete automotive solutions under one roof.",
    label: "Dual Expertise - Dealer & Rental",
  },
  {
    Icon: FaTools,
    description:
      "Transparent pricing, honest advice, and support that puts your needs first.",
    label: "Customer-Focused Service",
  },
  {
    Icon: FaClock,
    description:
      "Fully inspected, sanitized, and prepared vehicles — on the road in just 15 minutes.",
    label: "Clean & Ready to Drive",
  },
  {
    Icon: FaDollarSign,
    description:
      "Competitive rates with no hidden fees. Price match guarantee on all rentals.",
    label: "Transparent & Fair Pricing",
  },
];

const Card = ({ Icon, description, label }: Props) => {
  return (
    <div className="service-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center delay-100">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
        <Icon className="text-2xl text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-4">{label}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">Aspire Automotive?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide exceptional car rental and servicing experience with our
            customer-first approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
