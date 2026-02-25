import { FaPen } from "react-icons/fa";

import { getReviews } from "@/api/reviews";
import { REVIEWS_STATUS_APPROVED } from "@/constants/reviews";
import ReviewsCard from "@/components/reviews/Card";
import ReviewsForm from "@/components/reviews/Form";

const ReviewsPage = async () => {
  const reviews = await getReviews({
    status: REVIEWS_STATUS_APPROVED.toString(),
    limit: "100",
  });

  return (
    <>
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Reviews
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
        </div>
      </section>

      <section
        className="py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        id="reviewsForm"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-opacity-20 text-primary rounded-full text-sm font-semibold mb-4">
              <FaPen className="mr-2" />
              Share Your Experience
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Add Your <span className="text-primary">Review</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We value your feedback! Tell us about your experience with our
              services.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
            <ReviewsForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
