"use client";

import { FaCar, FaSave, FaPencilAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { ADMIN_CAR_RENT_ROUTE } from "@/constants/routes";
import { createRentalCar, updateRentalCar } from "@/api/axios/rentalCars";
import { parseNumber } from "@/utils/inputFormatter";
import { RentalCarWithDetails } from "@/lib/types/rentalCar.types";
import Button from "@/components/Button";
import ErrorModal from "@/components/Error";
import SelectCar from "./SelectCar";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

interface FormInput {
  car_id: string;
  daily_rate: string;
  weekly_rate: string;
  monthly_rate: string;
}

interface Props {
  mode?: "create" | "edit" | "view";
  rentalCar?: RentalCarWithDetails;
}

const RentCarForm = ({ rentalCar, mode = "create" }: Props) => {
  const { register, handleSubmit, reset, setValue } = useForm<FormInput>({
    values: {
      car_id: rentalCar?.car_id.toString() ?? "",
      daily_rate: rentalCar?.daily_rate.toString() ?? "",
      weekly_rate: rentalCar?.weekly_rate?.toString() ?? "",
      monthly_rate: rentalCar?.monthly_rate?.toString() ?? "",
    },
  });

  function upsertRentalCar(data: FormInput) {
    const input = {
      car_id: parseNumber(data.car_id)!,
      daily_rate: parseNumber(data.daily_rate)!,
      weekly_rate: parseNumber(data.weekly_rate),
      monthly_rate: parseNumber(data.monthly_rate),
    };

    if (mode == "edit") {
      return updateRentalCar(rentalCar!.id, input);
    }

    return createRentalCar(input);
  }

  const { error, loading, run, success } = useRequest(upsertRentalCar);

  const router = useRouter();

  useEffect(() => {
    if (success) {
      toast.success("Rental car saved successfully.");

      router.replace(ADMIN_CAR_RENT_ROUTE);

      reset();
    }

    if (error) {
      toast.error(
        <ErrorModal defaultError="Rental car save failed!" error={error} />,
        { icon: false },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-dark-900 overflow-hidden mb-8">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaCar />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Add Rental Car
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Add a new car for renting
              </p>
            </div>
          </div>

          {mode == "view" && (
            <Button
              href={`${ADMIN_CAR_RENT_ROUTE}/${rentalCar?.id}/edit`}
              size="sm"
            >
              <FaPencilAlt /> Edit
            </Button>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit(run)}>
        {/* Car Selection */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            1. Select Car for Rent
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="rentalCar"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Select Car *
              </label>
              <SelectCar
                mode={mode}
                selectedRentalCar={rentalCar}
                setCarId={(id) => setValue("car_id", id)}
              />
            </div>
          </div>
        </div>
        {/* Rental Details */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            2. Rental Pricing
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="dailyRate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Daily Rate ($) *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">$</span>
                </div>
                <input
                  type="number"
                  id="dailyRate"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-400"
                  placeholder="0.0"
                  required
                  disabled={mode == "view"}
                  {...register("daily_rate")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="weeklyRate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Weekly Rate ($)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">$</span>
                </div>
                <input
                  type="number"
                  id="weeklyRate"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-400"
                  placeholder="0.0"
                  disabled={mode == "view"}
                  {...register("weekly_rate")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="monthlyRate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Monthly Rate ($)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">$</span>
                </div>
                <input
                  type="number"
                  id="monthlyRate"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-400"
                  placeholder="0.0"
                  disabled={mode == "view"}
                  {...register("monthly_rate")}
                />
              </div>
            </div>
          </div>
        </div>

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
                Save Car Rental
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RentCarForm;
