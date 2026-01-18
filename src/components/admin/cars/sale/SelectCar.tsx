import { FaCar } from "react-icons/fa";
import { useState } from "react";
import AsyncSelect from "react-select/async";

import { getCars } from "@/api/cars";
import { SaleCarWithDetails } from "@/lib/types/saleCar.types";
import CarStatus from "../Status";

interface Props {
  isEditing?: boolean;
  selectedSaleCar?: SaleCarWithDetails;
  setCarId: (_: string) => void;
}

const SelectCar = ({ isEditing = false, selectedSaleCar, setCarId }: Props) => {
  const defaultCar = selectedSaleCar
    ? {
        category: selectedSaleCar?.category,
        chassisNumber: selectedSaleCar?.chassis_number,
        label: `${selectedSaleCar?.brand} ${selectedSaleCar?.model} ${selectedSaleCar?.variant} ${selectedSaleCar?.year}`,
        licensePlate: selectedSaleCar?.license_plate,
        status: selectedSaleCar?.status,
        value: selectedSaleCar?.id,
      }
    : null;

  const [selectedCar, setSelectedCar] = useState<Record<
    string,
    string | number | undefined
  > | null>(defaultCar);

  const loadOptions = (inputValue: string) =>
    new Promise<Record<string, string | number>[]>(async (resolve) => {
      const response = await getCars({
        search: inputValue,
      });

      resolve(
        response.data.map((car) => ({
          category: car.category,
          chassisNumber: car.chassis_number,
          label: `${car.brand} ${car.model} ${car.variant} ${car.year}`,
          licensePlate: car.license_plate,
          status: car.status,
          value: car.id,
        })),
      );
    });

  return (
    <div id="react-select">
      <AsyncSelect
        id="saleCar"
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        isDisabled={isEditing}
        classNamePrefix="react-select"
        required
        onChange={(item) => {
          setCarId(`${item?.value}`);
          setSelectedCar(item);
        }}
      />
      {selectedCar && (
        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg ">
          <div className="flex items-center">
            <div className="min-w-16 h-12 rounded-md bg-linear-to-r from-primary to-red-700 hidden md:flex items-center justify-center mr-4">
              <FaCar className="text-white text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                {selectedCar.label}
              </h4>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span>{selectedCar.category} • </span>
                <span>{selectedCar.licensePlate} • </span>
                <span>{selectedCar.chassisNumber}</span>
              </div>
              <div className="mt-1">
                <CarStatus
                  id={selectedCar.id as number}
                  status={selectedCar.status as number}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCar;
