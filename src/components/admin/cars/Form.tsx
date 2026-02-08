"use client";

import {
  FaCar,
  FaCogs,
  FaImages,
  FaPencilAlt,
  FaSave,
  FaStar,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { ADMIN_CARS_LIST_ROUTE, ADMIN_CARS_ROUTE } from "@/constants/routes";
import { AppError } from "@/helpers/errorNormalization";
import { Car } from "@/lib/types/car.types";
import {
  carConditions,
  categories,
  comfortFeatures,
  driveTypes,
  fuelTypes,
  safetyFeatures,
  techFeatures,
  transmissionTypes,
} from "@/constants/cars";
import { createCar, uploadCarImages } from "@/api/axios/cars";
import { parseNumber } from "@/utils/inputFormatter";
import Button from "@/components/Button";
import ErrorModal from "@/components/Error";
import ImageUploader from "@/components/ImageUploader";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

export interface FormInput {
  brand: string;
  category?: string;
  chassis_number: string;
  color?: string;
  condition?: string;
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

interface Props {
  car?: Car;
  mode?: "create" | "edit" | "view";
}

const CarForm = ({ car, mode = "create" }: Props) => {
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string[]>([]);
  const [otherImageUrls, setOtherImageUrls] = useState<string[]>([]);

  const { register, handleSubmit, reset, watch, setValue } = useForm<FormInput>(
    {
      values: {
        brand: car?.brand ?? "",
        category: car?.category ?? "",
        chassis_number: car?.chassis_number ?? "",
        color: car?.color ?? "",
        condition: car?.condition ?? "",
        description: car?.description ?? "",
        drive_type: car?.drive_type ?? "",
        engine_capacity: car?.engine_capacity?.toString() ?? "",
        engine_number: car?.engine_number ?? "",
        features:
          car?.features
            ?.filter((feature) =>
              [...safetyFeatures, ...techFeatures, ...comfortFeatures].includes(
                feature,
              ),
            )
            .join(",") ?? "",
        fuel_type: car?.fuel_type ?? "",
        license_plate: car?.license_plate ?? "",
        mileage: car?.mileage?.toString() ?? "",
        model: car?.model ?? "",
        price: car?.price?.toString() ?? "",
        seat_capacity: car?.seat_capacity?.toString() ?? "",
        status: car?.status?.toString() ?? "1",
        transmission_type: car?.transmission_type ?? "",
        variant: car?.variant ?? "",
        year: car?.year?.toString() ?? "",
        other_features:
          car?.features
            ?.filter(
              (feature) =>
                ![
                  ...safetyFeatures,
                  ...techFeatures,
                  ...comfortFeatures,
                ].includes(feature),
            )
            .join(",") ?? "",
      },
    },
  );

  const features = watch("features");

  const router = useRouter();

  const handleFeatureChange = (feature: string, checked: boolean) => {
    let list = features ? features.split(",") : [];

    if (checked) list.push(feature);
    else list = list.filter((f) => f !== feature);

    setValue("features", list.join(","));
  };

  const { error, loading, run, success } = useRequest(createCarWithImages);

  async function createCarWithImages(data: FormInput) {
    if (
      mode == "create" &&
      (!featuredImageUrl || featuredImageUrl.length == 0)
    ) {
      throw new AppError("Featured image is required.");
    }

    const response = await createCar({
      ...data,
      engine_capacity: parseNumber(data.engine_capacity),
      features: [features, data.other_features].join(","),
      mileage: parseNumber(data.mileage),
      price: parseNumber(data.price),
      seat_capacity: parseNumber(data.seat_capacity),
      year: parseNumber(data.year),
    } as unknown as Car);

    const createdCar = response.data;

    const images = [
      {
        url: featuredImageUrl[0],
        featured: true,
      },
      ...otherImageUrls.map((url) => ({ url })),
    ].filter((image) => image.url != undefined);

    await uploadCarImages(createdCar.id, images);
  }

  useEffect(() => {
    if (success) {
      toast.success("Car saved successfully.");

      router.replace(ADMIN_CARS_LIST_ROUTE);

      setFeaturedImageUrl([]);
      setOtherImageUrls([]);
      reset();
    }

    if (error) {
      toast.error(
        <ErrorModal defaultError="Car save failed!" error={error} />,
        {
          icon: false,
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      <form onSubmit={handleSubmit(run)}>
        {/* Basic Information Section */}
        <div className="form-section p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
                <FaCar />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Basic Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Primary details about the car
                </p>
              </div>
            </div>

            {mode == "view" && (
              <Button href={`${ADMIN_CARS_ROUTE}/${car?.id}/edit`} size="sm">
                <FaPencilAlt /> Edit
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Brand */}
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Brand *
              </label>
              <input
                type="text"
                id="brand"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="e.g. Toyota, BMW, Tesla"
                required
                disabled={mode == "view"}
                {...register("brand")}
              />
            </div>
            {/* Model */}
            <div>
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Model *
              </label>
              <input
                type="text"
                id="model"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="e.g. Camry, Model 3, X5"
                required
                disabled={mode == "view"}
                {...register("model")}
              />
            </div>
            {/* Variant */}
            <div>
              <label
                htmlFor="variant"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Variant / Trim
              </label>
              <input
                type="text"
                id="variant"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="e.g. SE, Limited, Performance"
                disabled={mode == "view"}
                {...register("variant")}
              />
            </div>
            {/* Year */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Year *
              </label>
              <input
                type="number"
                min="1900"
                max="2100"
                step="1"
                id="year"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="e.g. 2025"
                required
                disabled={mode == "view"}
                {...register("year")}
              />
            </div>
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Category *
              </label>
              <select
                id="category"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                required
                disabled={mode == "view"}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  step="0.01"
                  disabled={mode == "view"}
                  {...register("price")}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
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
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
              placeholder="Provide a detailed description of the car..."
              defaultValue={""}
              disabled={mode == "view"}
              {...register("description")}
            />
          </div>
        </div>
        {/* Technical Specifications Section */}
        <div className="form-section p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaCogs />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Technical Specifications
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Mechanical and performance details
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* License plate */}
            <div>
              <label
                htmlFor="licensePlate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                License Plate *
              </label>
              <input
                type="text"
                id="licensePlate"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 font-mono disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="License plate number"
                required
                disabled={mode != "create"}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Chassis Number (VIN) *
              </label>
              <input
                type="text"
                id="chassisNumber"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 font-mono disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="17-character VIN"
                required
                disabled={mode == "view"}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Engine Number
              </label>
              <input
                type="text"
                id="engineNumber"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 font-mono disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="Engine serial number"
                disabled={mode == "view"}
                {...register("engine_number")}
              />
            </div>
            {/* Mileage */}
            <div>
              <label
                htmlFor="mileage"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Mileage (km)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="mileage"
                  min={0}
                  disabled={mode == "view"}
                  {...register("mileage")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Engine Capacity
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="engineCapacity"
                  min={0.0}
                  step="0.01"
                  disabled={mode == "view"}
                  {...register("engine_capacity")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Fuel Type *
              </label>
              <select
                id="fuel"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                required
                disabled={mode == "view"}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Transmission *
              </label>
              <select
                id="transmission"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                required
                disabled={mode == "view"}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Drive Type
              </label>
              <select
                id="driveType"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={mode == "view"}
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Number of Seats *
              </label>
              <input
                type="number"
                id="seats"
                min={2}
                max={15}
                step="1"
                disabled={mode == "view"}
                {...register("seat_capacity")}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="2"
              />
            </div>
            {/* Color */}
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder="e.g., Midnight Black, Pearl White"
                disabled={mode == "view"}
                {...register("color")}
              />
            </div>
            <div>
              <label
                htmlFor="condition"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Condition
              </label>
              <select
                id="condition"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={mode == "view"}
                {...register("condition")}
              >
                <option value="">Select Car Condition</option>
                {carConditions.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Features & Equipment Section */}
        <div className="form-section p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaStar />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Features &amp; Equipment
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Select all available features and amenities
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
              Safety Features
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={feature}
                    type="checkbox"
                    className="h-4 w-4 text-red-600 border-gray-300 dark:border-gray-700 rounded custom-checkbox"
                    disabled={mode == "view"}
                    {...register("features")}
                    checked={features?.includes(feature)}
                    onChange={(e) =>
                      handleFeatureChange(feature, e.target.checked)
                    }
                  />
                  <label
                    className="ml-2 text-gray-700 dark:text-gray-300"
                    htmlFor={feature}
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
              Comfort &amp; Convenience
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {comfortFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={feature}
                    type="checkbox"
                    className="h-4 w-4 text-red-600 border-gray-300 dark:border-gray-700 rounded custom-checkbox"
                    disabled={mode == "view"}
                    {...register("features")}
                    checked={features?.includes(feature)}
                    onChange={(e) =>
                      handleFeatureChange(feature, e.target.checked)
                    }
                  />
                  <label
                    className="ml-2 text-gray-700 dark:text-gray-300"
                    htmlFor={feature}
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
              Entertainment &amp; Technology
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {techFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={feature}
                    type="checkbox"
                    className="h-4 w-4 text-red-600 border-gray-300 dark:border-gray-700 rounded custom-checkbox"
                    disabled={mode == "view"}
                    {...register("features")}
                    checked={features?.includes(feature)}
                    onChange={(e) =>
                      handleFeatureChange(feature, e.target.checked)
                    }
                  />
                  <label
                    className="ml-2 text-gray-700 dark:text-gray-300"
                    htmlFor={feature}
                  >
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
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Additional Features (comma separated)
            </label>
            <input
              type="text"
              id="additionalFeatures"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
              placeholder="e.g., panoramic roof, heated steering wheel, ambient lighting"
              disabled={mode == "view"}
              {...register("other_features")}
            />
            <p className="text-xs text-gray-500 mt-1">
              Add any features not listed above
            </p>
          </div>
        </div>
        {/* Media & Images Section */}
        {mode != "view" && (
          <div className="form-section p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
                <FaImages />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Media &amp; Images
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Upload photos of the car
                </p>
              </div>
            </div>
            {/* Featured Image */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Featured Image *
              </label>
              <p className="text-sm text-gray-500 mb-4">
                This will be the main image displayed for the car
              </p>
              <ImageUploader
                folder="cars"
                id="featuredImage"
                setImageUrls={setFeaturedImageUrl}
              />
            </div>

            {/* Additional Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Images
              </label>
              <p className="text-sm text-gray-500 mb-4">
                Upload multiple images showing different angles and features
              </p>
              <ImageUploader
                folder="cars"
                id="otherImages"
                multiple={true}
                setImageUrls={setOtherImageUrls}
              />
            </div>
          </div>
        )}
        {/* Form Actions */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-primary">
              Fields marked with * are required.
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Button
                type="submit"
                size="md"
                disabled={loading || mode == "view"}
              >
                {loading ? <Spinner /> : <FaSave />}
                Save Car
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CarForm;
