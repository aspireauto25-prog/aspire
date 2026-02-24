import { FaStar } from "react-icons/fa6";

interface Props {
  disabled?: boolean;
  rating: number;
  setRating: (_: number) => void;
}

const MAX_RATING = 5;

const RatingInput = ({ disabled, rating, setRating }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <button
          key={index}
          type="button"
          disabled={disabled}
          className={`rating-star text-3xl focus:outline-none ${
            index < rating
              ? "text-yellow-400 cursor-pointer"
              : "text-gray-300 dark:text-gray-600 cursor-pointer"
          }`}
          onClick={() => setRating(index + 1)}
        >
          <FaStar className="text-2xl" />
        </button>
      ))}
    </div>
  );
};

export default RatingInput;
