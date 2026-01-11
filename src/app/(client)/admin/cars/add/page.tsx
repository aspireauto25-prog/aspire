"use client";

import {
  FaBookmark,
  FaCar,
  FaCogs,
  FaImages,
  FaSave,
  FaStar,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Car } from "@/lib/types/car.types";
import {
  categories,
  comfortFeatures,
  driveTypes,
  fuelTypes,
  safetyFeatures,
  seatCapacities,
  techFeatures,
  transmissionTypes,
} from "@/constants/cars";
import { createCar } from "@/api/axios/cars";
import { parseNumber } from "@/utils/inputFormatter";
import Button from "@/components/Button";
import ImageUpload from "@/components/ImageUpload";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

export interface FormInput {
  brand: string;
  category?: string;
  chassis_number: string;
  color?: string;
  description?: string;
  drive_type: string;
  engine_capacity?: string;
  engine_number?: string;
  features?: string;
  fuel_type?: string;
  license_plate: string;
  mileage?: string;
  model: string;
  other_features?: string;
  price: string;
  seat_capacity?: string;
  status: string;
  transmission_type?: string;
  variant: string;
  year: string;
}

const AddCarPage = () => {
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null);

  const { register, handleSubmit, reset, watch, setValue } = useForm<FormInput>(
    {
      defaultValues: {
        features: "",
      },
    }
  );

  const features = watch("features");

  const handleFeatureChange = (feature: string, checked: boolean) => {
    let list = features ? features.split(",") : [];

    if (checked) list.push(feature);
    else list = list.filter((f) => f !== feature);

    setValue("features", list.join(","));
  };

  const { error, loading, run, success } = useRequest((data: FormInput) =>
    createCar({
      ...data,
      engine_capacity: parseNumber(data.engine_capacity),
      features: [features, data.other_features].join(","),
      mileage: parseNumber(data.mileage),
      price: parseNumber(data.price),
      seat_capacity: parseNumber(data.seat_capacity),
      year: parseNumber(data.year),
    } as unknown as Car)
  );

  useEffect(() => {
    if (success) {
      toast.success("Car added successfully.");

      reset();
    }

    if (error) {
      toast.error("Car create failed. Please try again.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <section className="bg-white rounded-xl shadow overflow-hidden">
      <form onSubmit={handleSubmit(run)}>
        {/* Basic Information Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaCar />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Basic Information
              </h2>
              <p className="text-gray-600 text-sm">
                Primary details about the car
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Brand */}
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Brand *
              </label>
              <input
                type="text"
                id="brand"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. Toyota, BMW, Tesla"
                required
                {...register("brand")}
              />
            </div>
            {/* Model */}
            <div>
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Model *
              </label>
              <input
                type="text"
                id="model"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. Camry, Model 3, X5"
                required
                {...register("model")}
              />
            </div>
            {/* Variant */}
            <div>
              <label
                htmlFor="variant"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Variant / Trim
              </label>
              <input
                type="text"
                id="variant"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. SE, Limited, Performance"
                {...register("variant")}
              />
            </div>
            {/* Year */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Year *
              </label>
              <input
                type="number"
                min="1900"
                max="2100"
                step="1"
                id="year"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. 2025"
                required
                {...register("year")}
              />
            </div>
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category *
              </label>
              <select
                id="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
                {...register("category")}
              >
                <option value="">Select Category</option>
                {categories.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price ($) *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  id="price"
                  min={0}
                  {...register("price")}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                  placeholder="0.0"
                  required
                />
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="mt-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
              placeholder="Provide a detailed description of the car..."
              defaultValue={""}
              {...register("description")}
            />
          </div>
        </div>
        {/* Technical Specifications Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaCogs />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Technical Specifications
              </h2>
              <p className="text-gray-600 text-sm">
                Mechanical and performance details
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* License plate */}
            <div>
              <label
                htmlFor="licensePlate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                License Plate *
              </label>
              <input
                type="text"
                id="licensePlate"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200 font-mono"
                placeholder="License plate number"
                required
                {...register("license_plate")}
              />
              <p className="text-xs text-gray-500 mt-1">
                Vehicle Identification Number
              </p>
            </div>
            {/* Chassis Number */}
            <div>
              <label
                htmlFor="chassisNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Chassis Number (VIN) *
              </label>
              <input
                type="text"
                id="chassisNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200 font-mono"
                placeholder="17-character VIN"
                required
                {...register("chassis_number")}
              />
              <p className="text-xs text-gray-500 mt-1">
                Vehicle Identification Number
              </p>
            </div>
            {/* Engine Number */}
            <div>
              <label
                htmlFor="engineNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Engine Number
              </label>
              <input
                type="text"
                id="engineNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200 font-mono"
                placeholder="Engine serial number"
                {...register("engine_number")}
              />
            </div>
            {/* Mileage */}
            <div>
              <label
                htmlFor="mileage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mileage (km)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="mileage"
                  min={0}
                  {...register("mileage")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                  placeholder="0"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">km</span>
                </div>
              </div>
            </div>
            {/* Engine Capacity */}
            <div>
              <label
                htmlFor="engineCapacity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Engine Capacity
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="engineCapacity"
                  min={0}
                  {...register("engine_capacity")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                  placeholder="0.0"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">L</span>
                </div>
              </div>
            </div>
            {/* Fuel Type */}
            <div>
              <label
                htmlFor="fuel"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Fuel Type *
              </label>
              <select
                id="fuel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
                {...register("fuel_type")}
              >
                <option value="">Select Fuel Type</option>
                {fuelTypes.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            {/* Transmission */}
            <div>
              <label
                htmlFor="transmission"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Transmission *
              </label>
              <select
                id="transmission"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
                {...register("transmission_type")}
              >
                <option value="">Select Transmission</option>
                {transmissionTypes.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            {/* Drive Type */}
            <div>
              <label
                htmlFor="driveType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Drive Type
              </label>
              <select
                id="driveType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                {...register("drive_type")}
              >
                <option value="">Select Drive Type</option>
                {driveTypes.map((type, index) => (
                  <option key={index} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            {/* No. of Seats */}
            <div>
              <label
                htmlFor="seats"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Number of Seats *
              </label>
              <select
                id="seats"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
                {...register("seat_capacity")}
              >
                <option value="">Select Seats</option>
                {seatCapacities.map((value, index) => (
                  <option key={index} value={value}>
                    {value} Seats
                  </option>
                ))}
              </select>
            </div>
            {/* Color */}
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g., Midnight Black, Pearl White"
                {...register("color")}
              />
            </div>
          </div>
        </div>
        {/* Features & Equipment Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaStar />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Features &amp; Equipment
              </h2>
              <p className="text-gray-600 text-sm">
                Select all available features and amenities
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Safety Features
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={feature}
                    type="checkbox"
                    className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                    {...register("features")}
                    checked={features?.includes(feature)}
                    onChange={(e) =>
                      handleFeatureChange(feature, e.target.checked)
                    }
                  />
                  <label className="ml-2 text-gray-700" htmlFor={feature}>
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Comfort &amp; Convenience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {comfortFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={feature}
                    type="checkbox"
                    className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                    {...register("features")}
                    checked={features?.includes(feature)}
                    onChange={(e) =>
                      handleFeatureChange(feature, e.target.checked)
                    }
                  />
                  <label className="ml-2 text-gray-700" htmlFor={feature}>
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Entertainment &amp; Technology
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {techFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={feature}
                    type="checkbox"
                    className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                    {...register("features")}
                    checked={features?.includes(feature)}
                    onChange={(e) =>
                      handleFeatureChange(feature, e.target.checked)
                    }
                  />
                  <label className="ml-2 text-gray-700" htmlFor={feature}>
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Additional Features Input */}
          <div>
            <label
              htmlFor="additionalFeatures"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Additional Features (comma separated)
            </label>
            <input
              type="text"
              id="additionalFeatures"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
              placeholder="e.g., panoramic roof, heated steering wheel, ambient lighting"
              {...register("other_features")}
            />
            <p className="text-xs text-gray-500 mt-1">
              Add any features not listed above
            </p>
          </div>
        </div>
        {/* Media & Images Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaImages />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Media &amp; Images
              </h2>
              <p className="text-gray-600 text-sm">Upload photos of the car</p>
            </div>
          </div>
          {/* Featured Image */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image *
            </label>
            <p className="text-sm text-gray-500 mb-4">
              This will be the main image displayed for the car
            </p>
            <ImageUpload folder="cars" setImageUrl={setFeaturedImageUrl} />
          </div>
          {/* Additional Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Images
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Upload multiple images showing different angles and features
            </p>
            <div
              className="image-upload-area rounded-xl p-8 text-center cursor-pointer"
              id="additionalImagesUpload"
            >
              <div className="max-w-xs mx-auto">
                <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <FaImages className="fas fa-images text-gray-400 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Drag &amp; drop or click to upload
                </h3>
                <p className="text-gray-500 text-sm">
                  Upload up to 10 images (5MB each)
                </p>
                <div className="mt-4 flex justify-center">
                  <Button type="button" size="sm" theme="light">
                    Select Images
                  </Button>
                </div>
              </div>
              <input
                type="file"
                id="additionalImages"
                name="additionalImages"
                className="hidden"
                accept="image/*"
                multiple
              />
            </div>
            <div className="mt-4 hidden" id="additionalImagesPreview">
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                id="additionalImagesList"
              >
                {/* Additional images will be previewed here */}
              </div>
            </div>
          </div>
        </div>
        {/* Form Actions */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary">
              Fields marked with * are required.
            </div>
            <div className="flex space-x-4">
              <Button type="button" theme="light" size="md">
                <FaBookmark />
                Save as Draft
              </Button>

              <Button type="submit" size="md" disabled={loading}>
                {loading ? <Spinner /> : <FaSave />}
                Add Car to Inventory
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddCarPage;
