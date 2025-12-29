import Image from "next/image";

interface Props {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  mileage: string;
  year: string;
  fuel: string;
  transmission: string;
  location: string;
  image: string;
  features: string[];
  condition: string;
  certified: boolean;
  urgency: string;
  description: string;
}

const BuySellCard = (props: Props) => {
  const urgencyText =
    {
      hot: "Hot Deal",
      new: "Just Listed",
      discount: "Price Drop",
    }[props.urgency] || "Special";

  const urgencyClass =
    {
      hot: "bg-red-500",
      new: "bg-blue-500",
      discount: "bg-green-500",
    }[props.urgency] || "bg-gray-500";

  const savings = props.originalPrice - props.price;
  const savingsPercent = Math.round((savings / props.originalPrice) * 100);

  return (
    <div className="car-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up">
      <div className="relative">
        <Image
          src={props.image}
          alt={props.title}
          className="w-full h-48 object-cover"
          width={600}
          height={400}
        />
        {props.urgency ? (
          <div
            className={`absolute top-4 left-4 ${urgencyClass} text-white px-3 py-1 rounded-full text-sm font-bold`}
          >
            {urgencyText}
          </div>
        ) : null}
        {props.certified ? (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            <i className="fas fa-shield-alt mr-1" /> Certified
          </div>
        ) : null}
        {props.originalPrice > props.price ? (
          <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Save ${savings.toLocaleString()}
          </div>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 truncate">{props.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
            {props.year}
          </span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
            {props.mileage}
          </span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
            {props.condition}
          </span>
        </div>
        <div className="text-2xl font-bold text-primary mb-4">
          ${props.price.toLocaleString()}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {props.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
            >
              <i className="fas fa-check mr-1" />
              {feature}
            </span>
          ))}

          {props.features.length > 2 ? (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs">
              +{props.features.length - 2} more
            </span>
          ) : null}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            <i className="fas fa-map-marker-alt mr-1" />
            {props.location}
          </div>
          <div className="flex space-x-2">
            <button
              className="view-details-btn px-4 py-2 rounded-lg font-bold border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm"
              data-id={props.id}
            >
              Details
            </button>
            <button
              className="contact-seller-btn btn-primary px-4 py-2 rounded-lg font-bold text-sm"
              data-id={props.id}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellCard;
