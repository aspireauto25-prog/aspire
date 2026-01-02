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
      "All our vehicles come with comprehensive insurance coverage for your peace of mind.",
    label: "Fully Insured",
  },
  {
    Icon: FaTools,
    description:
      "Our certified technicians provide top-quality maintenance and repair services.",
    label: "Expert Servicing",
  },
  {
    Icon: FaClock,
    description:
      "Round-the-clock customer support to assist you anytime, anywhere.",
    label: "24/7 Support",
  },
  {
    Icon: FaDollarSign,
    description:
      "Competitive rates with no hidden fees. Price match guarantee on all rentals.",
    label: "Best Prices",
  },
];

const Card = ({ Icon, description, label }: Props) => {
  return (
    <div
      className="service-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
      style={{ animationDelay: "0.1s" }}
    >
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
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Aspire Automotive?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide exceptional car rental and servicing experience with our
            customer-first approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
