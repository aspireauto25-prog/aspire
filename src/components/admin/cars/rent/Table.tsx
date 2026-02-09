import { FaCar, FaCog, FaEdit, FaEye } from "react-icons/fa";
import Link from "next/link";

import { ADMIN_CAR_RENT_ROUTE } from "@/constants/routes";
import { RentalCarWithDetails } from "@/lib/types/rentalCar.types";
import ActionMenu from "@/components/ActionMenu";
import CarStatus from "../Status";
import DeleteAction from "./DeleteAction";
import EmptyData from "../../../EmptyData";

interface Props {
  rentalCars: RentalCarWithDetails[];
}

const Table = async ({ rentalCars }: Props) => {
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
              Daily/Weekly Rate
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Status
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              <div className="flex justify-center">
                <FaCog />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {rentalCars.map((rentalCar) => (
            <tr
              key={rentalCar.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <td className="py-4 px-6">
                <Link href={`${ADMIN_CAR_RENT_ROUTE}/${rentalCar.id}`}>
                  <div className="flex items-center">
                    <div className="min-w-14 h-14 rounded-full bg-linear-to-r from-primary to-red-700 flex items-center justify-center mr-3 text-white">
                      <FaCar className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white space-x-1">
                        <span>{rentalCar.brand}</span>
                        <span>{rentalCar.model}</span>
                        <span>{rentalCar.variant}</span>
                        <span>{rentalCar.year}</span>
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: {rentalCar.license_plate}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: {rentalCar.chassis_number}
                      </p>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="py-4 px-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
                  {rentalCar.category}
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {rentalCar.transmission_type}
                </p>
              </td>
              <td className="py-4 px-6">
                <div className="space-y-1 whitespace-nowrap">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Fuel:</span>
                    <span>{rentalCar.fuel_type}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Seats:</span>
                    <span>{rentalCar.seat_capacity}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Mileage:</span>
                    <span>{rentalCar.mileage} km</span>
                  </p>
                </div>
              </td>
              <td className="py-4 px-6">
                <p className="font-bold text-gray-800 dark:text-white text-lg">
                  ${rentalCar.daily_rate}
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                    /day
                  </span>
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  ${rentalCar.weekly_rate}
                  /week
                </p>
              </td>
              <td className="py-4 px-6">
                <CarStatus id={rentalCar.car_id} status={rentalCar.status} />
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <ActionMenu>
                    <Link
                      href={`${ADMIN_CAR_RENT_ROUTE}/${rentalCar.id}`}
                      className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
                      title="View"
                    >
                      <FaEye />
                      <span className="text-sm">View</span>
                    </Link>
                    <Link
                      href={`${ADMIN_CAR_RENT_ROUTE}/${rentalCar.id}/edit`}
                      className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
                      title="Edit"
                    >
                      <FaEdit />
                      <span className="text-sm">Edit</span>
                    </Link>
                    <DeleteAction id={rentalCar.id} />
                  </ActionMenu>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {rentalCars.length == 0 && <EmptyData />}
    </div>
  );
};

export default Table;
