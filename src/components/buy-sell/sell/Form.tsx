"use client";

import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { carConditions } from "@/constants/cars";
import {
  createSellInquiry,
  uploadSellInquiryImages,
} from "@/api/axios/sellInquiries";
import { parseNumber } from "@/utils/inputFormatter";
import { SellInquiry } from "@/lib/types/sellInquiry.types";
import Button from "@/components/Button";
import ImageUploader from "@/components/ImageUploader";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";
import ErrorComponent from "@/components/ErrorComponent";

export interface FormInput {
  brand: string;
  condition: string;
  description?: string;
  mileage: string;
  model: string;
  owner_email: string;
  owner_name: string;
  owner_phone: string;
  price: string;
  variant?: string;
  year: string;
}

const SellForm = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const { register, handleSubmit, reset } = useForm<FormInput>();

  const { error, loading, run, success } = useRequest(sendInquiry);

  async function sendInquiry(data: FormInput) {
    const response = await createSellInquiry({
      ...data,
      mileage: parseNumber(data.mileage),
      price: parseNumber(data.price),
      year: parseNumber(data.year),
    } as unknown as SellInquiry);

    const createdCar = response.data;

    const images = imageUrls.map((url) => ({ url }));

    if (images.length > 0) await uploadSellInquiryImages(createdCar.id, images);
  }

  useEffect(() => {
    if (success) {
      toast.success("Sell inquiry sent successfully.");

      setImageUrls([]);
      reset();
    }

    if (error) {
      toast.error(
        <ErrorComponent defaultError="Sell inquiry failed!" error={error} />,
        { icon: false },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <form id="sell-form" className="space-y-6" onSubmit={handleSubmit(run)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Car Brand *
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("brand")}
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Car Model *
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("model")}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Car Variant
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("variant")}
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Year *
          </label>
          <input
            type="number"
            min={1990}
            max={new Date().getFullYear()}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("year")}
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Mileage (km) *
          </label>
          <input
            type="number"
            required
            min={1}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("mileage")}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Condition *
          </label>
          <select
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("condition")}
          >
            <option value="">Select condition</option>
            {carConditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Expected Price ($) *
          </label>
          <input
            type="number"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            {...register("price")}
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Description *
        </label>
        <textarea
          rows={4}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          defaultValue={""}
          {...register("description")}
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Upload Photos
        </label>
        <ImageUploader
          folder="cars"
          id="images"
          multiple={true}
          setImageUrls={setImageUrls}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Your Name *
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("owner_name")}
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("owner_phone")}
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Email Address *
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("owner_email")}
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? <Spinner /> : <FaPaperPlane />} Submit Sell Inquiry
      </Button>
    </form>
  );
};

export default SellForm;
