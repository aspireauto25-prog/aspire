import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";

import cars from "@/data/cars";
import CarStatus from "./Status";

const Table = () => {
  return (
    <div className="table-responsive">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Car Details
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Type
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Specifications
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Daily Rate
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Status
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {cars.map((car) => (
            <tr
              key={car.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <Image
                    src="https://images.unsplash.com/photo-1506610654-064fbba4780c?w=400"
                    alt={car.brand}
                    height={80}
                    width={100}
                    className="w-20 h-14 rounded-md bg-linear-to-r from-gray-800 to-gray-600 flex items-center justify-center mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">
                      {car.brand} {car.model} {car.variant} {car.year}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      License: {car.licensePlate}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      VIN: {car.chassisNumber}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
                  {car.category}
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {car.transmissionType}
                </p>
              </td>
              <td className="py-4 px-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Fuel:</span>
                    <span>{car.fuelType}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Seats:</span>
                    <span>{car.seatCapacity}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Mileage:</span>
                    <span>{car.mileage} km</span>
                  </p>
                </div>
              </td>
              <td className="py-4 px-6">
                <p className="font-bold text-gray-800 dark:text-white text-lg">
                  ${car.price}
                </p>
              </td>
              <td className="py-4 px-6">
                <CarStatus status={car.status} />
              </td>
              <td className="py-4 px-6">
                <div className="flex space-x-1">
                  <button
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
