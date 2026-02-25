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
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold">
              WHAT OUR CUSTOMERS SAY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
