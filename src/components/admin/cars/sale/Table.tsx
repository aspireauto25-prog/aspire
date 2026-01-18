import { FaCar, FaEdit } from "react-icons/fa";
import Link from "next/link";

import { SaleCarWithDetails } from "@/lib/types/saleCar.types";
import CarStatus from "./Status";
import DeleteAction from "./DeleteAction";
import EmptyTable from "../../EmptyTable";

interface Props {
  saleCars: SaleCarWithDetails[];
}

const Table = async ({ saleCars }: Props) => {
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {saleCars.map((saleCar) => (
            <tr
              key={saleCar.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className="min-w-16 h-12 rounded-md bg-linear-to-r from-primary to-red-700 flex items-center justify-center mr-4">
                    <FaCar className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white space-x-1 whitespace-nowrap">
                      <span>{saleCar.brand}</span>
                      <span>{saleCar.model}</span>
                      <span>{saleCar.variant}</span>
                      <span>{saleCar.year}</span>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      License: {saleCar.license_plate}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      VIN: {saleCar.chassis_number}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
                  {saleCar.category}
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {saleCar.transmission_type}
                </p>
              </td>
              <td className="py-4 px-6">
                <div className="space-y-1 whitespace-nowrap">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Fuel:</span>
                    <span>{saleCar.fuel_type}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Seats:</span>
                    <span>{saleCar.seat_capacity}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Mileage:</span>
                    <span>{saleCar.mileage} km</span>
                  </p>
                </div>
              </td>
              <td className="py-4 px-6">
                <p className="font-bold text-gray-800 dark:text-white text-lg">
                  ${saleCar?.full_price - (saleCar?.discount_price ?? 0)}
                </p>
                {saleCar.discount_price && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-through">
                    ${saleCar.full_price}
                  </p>
                )}
              </td>
              <td className="py-4 px-6">
                <CarStatus id={saleCar.id} status={saleCar.status} />
              </td>
              <td className="py-4 px-6">
                <div className="flex space-x-1">
                  <Link
                    href={`/admin/cars/sell/${saleCar.id}/edit`}
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                    title="Edit"
                  >
                    <FaEdit />
                  </Link>
                  <DeleteAction id={saleCar.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {saleCars.length == 0 && <EmptyTable />}
    </div>
  );
};

export default Table;
