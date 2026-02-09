"use client";

import { FaCar, FaPencilAlt, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { ADMIN_CAR_SELL_ROUTE } from "@/constants/routes";
import { AppError } from "@/helpers/errorNormalization";
import { createSaleCar, updateSaleCar } from "@/api/axios/saleCars";
import { parseNumber } from "@/utils/inputFormatter";
import { SaleCarWithDetails } from "@/lib/types/saleCar.types";
import Button from "@/components/Button";
import ErrorComponent from "@/components/ErrorComponent";
import SelectCar from "./SelectCar";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

interface FormInput {
  car_id: string;
  full_price: string;
  discount_price: string;
}

interface Props {
  mode?: "create" | "edit" | "view";
  saleCar?: SaleCarWithDetails;
}

const SaleCarForm = ({ saleCar, mode = "create" }: Props) => {
  const { register, handleSubmit, reset, setValue, watch } = useForm<FormInput>(
    {
      values: {
        car_id: saleCar?.car_id.toString() ?? "",
        full_price: saleCar?.full_price.toString() ?? "",
        discount_price: saleCar?.discount_price?.toString() ?? "",
      },
    },
  );

  const fullPrice = parseNumber(watch("full_price")) ?? 0;
  const discountPrice = parseNumber(watch("discount_price")) ?? 0;

  function upsertSaleCar(data: FormInput) {
    if (fullPrice <= discountPrice) {
      throw new AppError("Discount price must be less than full price.");
    }

    const input = {
      car_id: parseNumber(data.car_id)!,
      full_price: parseNumber(data.full_price)!,
      discount_price: parseNumber(data.discount_price),
    };

    if (mode == "edit") {
      return updateSaleCar(saleCar!.id, input);
    }

    return createSaleCar(input);
  }

  const { error, loading, run, success } = useRequest(upsertSaleCar);

  const router = useRouter();

  useEffect(() => {
    if (success) {
      toast.success("Sale car saved successfully.");

      router.replace(ADMIN_CAR_SELL_ROUTE);

      reset();
    }

    if (error) {
      toast.error(
        <ErrorComponent defaultError="Sale car save failed!" error={error} />,
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
                Add Sale Car
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Add a new car for selling
              </p>
            </div>
          </div>
          {mode == "view" && (
            <Button
              href={`${ADMIN_CAR_SELL_ROUTE}/${saleCar?.id}/edit`}
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
            1. Select Car for Sale
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="saleCar"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Select Car *
              </label>
              <SelectCar
                mode={mode}
                selectedSaleCar={saleCar}
                setCarId={(id) => setValue("car_id", id)}
              />
            </div>
          </div>
        </div>
        {/* Sale Details */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            2. Sale Pricing
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="fullPrice"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Price ($) *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">$</span>
                </div>
                <input
                  type="number"
                  id="fullPrice"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-400"
                  placeholder="0.0"
                  required
                  disabled={mode == "view"}
                  {...register("full_price")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="discountPrice"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Discount Price ($)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">$</span>
                </div>
                <input
                  type="number"
                  id="discountPrice"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-400"
                  placeholder="0.0"
                  disabled={mode == "view"}
                  {...register("discount_price")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="netPrice"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Net Price ($)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400">$</span>
                </div>
                <input
                  type="number"
                  id="netPrice"
                  disabled
                  min={0}
                  step="0.01"
                  value={fullPrice - discountPrice}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-400"
                  placeholder="0.0"
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
                Save Car Sale
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleCarForm;
