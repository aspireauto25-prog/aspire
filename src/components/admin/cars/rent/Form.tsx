"use client";

import { FaCar, FaSave } from "react-icons/fa";
import AsyncSelect from "react-select/async";

import { CAR_STATUS_AVAILABLE } from "@/constants/cars";
import { getCars } from "@/api/cars";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import { useState } from "react";

const RentCarForm = () => {
  const loading = false;
  const [selectedCar, setSelectedCar] = useState<Record<
    string,
    string | number
  > | null>();

  const loadOptions = (inputValue: string) =>
    new Promise<{ label: string; value: number }[]>(async (resolve) => {
      const response = await getCars({
        search: inputValue,
        status: CAR_STATUS_AVAILABLE,
      });

      resolve(
        response.data.map((car) => ({
          label: `${car.brand} ${car.model} ${car.variant} ${car.year}`,
          value: car.id,
        }))
      );
    });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-dark-900 overflow-hidden mb-8">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
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
      </div>
      <form>
        {/* Car Selection */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            1. Select Car for Rent
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div id="react-select">
              <label
                htmlFor="rentalCar"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Select Car *
              </label>
              <AsyncSelect
                id="rentalCar"
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                classNamePrefix="react-select"
                onChange={(item) => setSelectedCar(item)}
              />
              {selectedCar && (
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg ">
                  <div className="flex items-center">
                    <div className="h-16 w-24 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center mr-4">
                      <i className="fas fa-car text-gray-400 dark:text-gray-500 text-2xl" />
                    </div>
                    <div>
                      <h4
                        id="carRentName"
                        className="font-bold text-gray-800 dark:text-white"
                      >
                        {selectedCar.label}
                      </h4>
                      <p
                        id="carRentSpecs"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      />
                      <p id="carRentStatus" className="text-sm mt-1"></p>
                    </div>
                  </div>
                </div>
              )}
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
                  name="dailyRate"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all"
                  placeholder="0.0"
                  required
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
                  name="weeklyRate"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all"
                  placeholder="0.0"
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
                  name="monthlyRate"
                  min={0}
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all"
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
              <Button type="submit" size="md" disabled={loading}>
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
