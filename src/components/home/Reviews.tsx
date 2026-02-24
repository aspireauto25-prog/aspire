import { FaComments, FaPaperPlane } from "react-icons/fa";

import { getReviews } from "@/api/reviews";
import { REVIEWS_ROUTE } from "@/constants/routes";
import { REVIEWS_STATUS_APPROVED } from "@/constants/reviews";
import Button from "../Button";
import OutlinedButton from "../OutlinedButton";
import ReviewsCard from "../reviews/Card";

const Reviews = async () => {
  const reviews = await getReviews({
    status: REVIEWS_STATUS_APPROVED.toString(),
    limit: `${3}`,
  });

  if (reviews.data?.length === 0) {
    return null; // Return null if there are no reviews to display
  }

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our
            car services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.data.map((review) => (
            <ReviewsCard key={review.id} {...review} />
          ))}
        </div>
        <div className="text-center mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <Button href={REVIEWS_ROUTE} className="inline-flex items-center">
            <FaComments />
            View All Reviews
          </Button>
          <OutlinedButton
            href={`${REVIEWS_ROUTE}#reviewsForm`}
            className="inline-flex items-center"
          >
            <FaPaperPlane />
            Add Your Review
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
