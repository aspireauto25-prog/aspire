import { format } from "date-fns";
import { FaQuoteRight, FaStar, FaUserCircle } from "react-icons/fa";

interface Props {
  car?: string;
  created_at: string;
  name: string;
  ratings: number;
  review: string;
  service_used: string;
}

const Ratings = ({ ratings }: { ratings: number }) => {
  const fullStars = Math.round(ratings);
  const stars = [];
  const maxRatings = 5;

  for (let index = 1; index <= maxRatings; index++) {
    if (index <= fullStars) {
      stars.push(<FaStar key={index} className="text-yellow-400" />);
    } else {
      stars.push(<FaStar key={index} className="text-gray-300" />);
    }
  }

  return stars;
};

const ReviewsCard = ({
  car,
  created_at,
  name,
  ratings,
  review,
  service_used,
}: Props) => {
  return (
    <div className="testimonial-card bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 relative group">
      <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
        <FaQuoteRight className="text-6xl" />
      </div>
      <div className="flex items-center mb-6">
        <FaUserCircle className="text-primary h-10 w-10" />
        <div className="ml-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {service_used} {car && `- ${car}`}
          </p>
        </div>
      </div>
      <div className="flex mb-4">
        <Ratings ratings={ratings} />
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        &quot;{review}&quot;
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-500">
          {format(new Date(created_at), "MMMM d, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default ReviewsCard;
