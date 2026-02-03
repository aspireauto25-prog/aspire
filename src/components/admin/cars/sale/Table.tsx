import { FaCar, FaCog, FaEdit, FaEye } from "react-icons/fa";
import Link from "next/link";

import { ADMIN_CAR_SELL_ROUTE } from "@/constants/routes";
import { SaleCarWithDetails } from "@/lib/types/saleCar.types";
import ActionMenu from "@/components/ActionMenu";
import CarStatus from "../Status";
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
              <div className="flex justify-center">
                <FaCog />
              </div>
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
                <Link href={`${ADMIN_CAR_SELL_ROUTE}/${saleCar.id}`}>
                  <div className="flex items-center">
                    <div className="min-w-14 h-14 rounded-full bg-linear-to-r from-primary to-red-700 flex items-center justify-center mr-3 text-white">
                      <FaCar className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white space-x-1">
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
                </Link>
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
                <CarStatus id={saleCar.car_id} status={saleCar.status} />
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <ActionMenu>
                    <Link
                      href={`${ADMIN_CAR_SELL_ROUTE}/${saleCar.id}`}
                      className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
                      title="View"
                    >
                      <FaEye />
                      <span className="text-sm">View</span>
                    </Link>
                    <Link
                      href={`${ADMIN_CAR_SELL_ROUTE}/${saleCar.id}/edit`}
                      className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
                      title="Edit"
                    >
                      <FaEdit />
                      <span className="text-sm">Edit</span>
                    </Link>
                    <DeleteAction id={saleCar.id} />
                  </ActionMenu>
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
