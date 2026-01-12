import { FaCar } from "react-icons/fa";
import { useState } from "react";
import AsyncSelect from "react-select/async";

import { getCars } from "@/api/cars";
import CarStatus from "../Status";

interface Props {
  setCarId: (_: string) => void;
}

const SelectCar = ({ setCarId }: Props) => {
  const [selectedCar, setSelectedCar] = useState<Record<
    string,
    string | number
  > | null>();

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
        }))
      );
    });

  return (
    <div id="react-select">
      <AsyncSelect
        id="rentalCar"
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
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
            <div className="hidden h-16 w-24 bg-gray-200 dark:bg-gray-600 rounded sm:flex items-center justify-center mr-4">
              <FaCar className="text-gray-400 dark:text-gray-500 text-2xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                {selectedCar.label}
              </h4>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row gap-1">
                <span>{selectedCar.category} •</span>
                <span>{selectedCar.licensePlate} •</span>
                <span>{selectedCar.chassisNumber}</span>
              </div>
              <div className="mt-1">
                <CarStatus status={selectedCar.status as string} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCar;
