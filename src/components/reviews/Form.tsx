"use client";

import { FaPaperPlane, FaShieldAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { addReview } from "@/api/axios/reviews";
import { PRIVACY_POLICY } from "@/constants/legalDocuments";
import { Review } from "@/lib/types/review.types";
import { services } from "@/constants/reviews";
import { TERMS_CONDITIONS_ROUTE } from "@/constants/routes";
import Button from "../Button";
import ErrorComponent from "../ErrorComponent";
import useRequest from "@/hooks/useRequest";
import RatingInput from "./RatingInput";

interface FormData {
  consent: boolean;
  car?: string;
  email: string;
  name: string;
  review: string;
  service_used: string;
}

const ReviewsForm = () => {
  const [ratings, setRating] = useState(5);

  const { handleSubmit, register, reset } = useForm<FormData>();

  const { error, loading, run, success } = useRequest((data) =>
    addReview({ ...(data as Review), ratings }),
  );

  useEffect(() => {
    if (success) {
      toast.success("Review added successfully!");

      reset();
    }

    if (error) {
      toast.error(
        <ErrorComponent defaultError="Failed to add review!" error={error} />,
        { icon: false },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(run)}>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Your Rating *
        </label>
        <RatingInput rating={ratings} setRating={setRating} />
        <input type="hidden" id="rating" name="rating" defaultValue={0} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("name")}
            placeholder="e.g., John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g., john@example.com"
            {...register("email")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="service"
          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
        >
          Service Used *
        </label>
        <select
          id="service"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("service_used")}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="car"
          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
        >
          Car (Optional)
        </label>
        <input
          type="text"
          id="car"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., BMW X5, Tesla Model 3"
          {...register("car")}
        />
      </div>
      <div>
        <label
          htmlFor="review"
          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
        >
          Your Review *
        </label>
        <textarea
          id="review"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tell us about your experience..."
          defaultValue={""}
          {...register("review")}
        />
      </div>
      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          required
          className="h-4 w-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
          {...register("consent")}
        />
        <label
          htmlFor="consent"
          className="ml-2 text-sm text-gray-600 dark:text-gray-400"
        >
          I agree to the
          <Link
            href={TERMS_CONDITIONS_ROUTE}
            className="text-primary hover:underline px-1 inline-flex"
          >
            Terms of Service
          </Link>
          and
          <Link
            href={PRIVACY_POLICY}
            className="text-primary hover:underline px-1"
          >
            Privacy Policy
          </Link>
          . I confirm that this review is based on my genuine experience.
        </label>
      </div>
      <div className="pt-4 flex justify-center">
        <Button type="submit" disabled={loading}>
          <FaPaperPlane />
          {loading ? "Sending..." : "Submit Your Review"}
        </Button>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 flex items-center justify-center">
        <FaShieldAlt className="mr-1 text-primary" />
        Your email will never be published. All reviews are moderated.
      </p>
    </form>
  );
};

export default ReviewsForm;
