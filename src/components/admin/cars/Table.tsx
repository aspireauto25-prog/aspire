import { FaEdit } from "react-icons/fa";
import { isBefore } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { Car } from "@/lib/types/car.types";
import CarStatus from "./Status";
import DeleteAction from "./DeleteAction";
import EmptyTable from "../EmptyTable";

import logoUrl from "@/assets/images/logo.png";

interface Props {
  cars: Car[];
}

const Table = async ({ cars }: Props) => {
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
                    src={
                      car.car_images
                        ?.sort((a, b) =>
                          isBefore(a.created_at, b.created_at) ? 1 : -1
                        )
                        .find((image) => image.featured)?.url ?? logoUrl
                    }
                    alt={car.brand}
                    height={80}
                    width={100}
                    className="w-20 h-14 rounded-md bg-linear-to-r border bg-gray-50 flex items-center justify-center mr-4 object-contain"
                  />
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">
                      {car.brand} {car.model} {car.variant} {car.year}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      License: {car.license_plate}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      VIN: {car.chassis_number}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
                  {car.category}
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {car.transmission_type}
                </p>
              </td>
              <td className="py-4 px-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Fuel:</span>
                    <span>{car.fuel_type}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Seats:</span>
                    <span>{car.seat_capacity}</span>
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
                  <Link
                    href={`/admin/cars/${car.id}/edit`}
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                    title="Edit"
                  >
                    <FaEdit />
                  </Link>
                  <DeleteAction id={car.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cars.length == 0 && <EmptyTable />}
    </div>
  );
};

export default Table;
