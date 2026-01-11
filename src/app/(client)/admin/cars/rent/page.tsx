import {
  FaCalendarAlt,
  FaCar,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaEye,
  FaPlus,
  FaTrash,
  FaWrench,
} from "react-icons/fa";

import { ADD_CAR_RENT_ROUTE } from "@/constants/routes";
import LinkButton from "@/components/LinkButton";
import CarStats from "@/components/admin/cars/Stats";
import Search from "@/components/admin/Search";
import Filters from "@/components/admin/cars/Filters";

const CarRentalPage = () => {
  return (
    <section>
      <CarStats />

      {/* Action Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Rental Cars Inventory
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage your fleet of rental vehicles
            </p>
          </div>
          <Search query={""} />
        </div>
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <Filters currentStatus={""} />
          <LinkButton href={ADD_CAR_RENT_ROUTE} size="sm">
            <FaPlus />
            Add New Car
          </LinkButton>
        </div>
        {/* Quick Filters */}
      </div>
      {/* Rental Cars Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
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
                  Last Rental
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {/* Car 1 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-16 h-12 rounded-md bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center mr-4">
                      <FaCar className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white">
                        Toyota Camry 2023
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: ABC123 • Color: White
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: 1HGCM82633A123456
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium">
                    Sedan
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Automatic
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Fuel:</span> Petrol
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Seats:</span> 5
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 12,500 km
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $45
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                      /day
                    </span>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $280/week
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-available">
                    Available
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Next booking: May 25
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    John Smith
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    May 12-19
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="p-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg"
                      title="Manage Bookings"
                    >
                      <FaCalendarAlt />
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
              {/* Car 2 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-16 h-12 rounded-md bg-linear-to-r from-gray-800 to-gray-600 flex items-center justify-center mr-4">
                      <FaCar className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white">
                        BMW X5 2022
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: XYZ789 • Color: Black
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: 5UXCR435XYA987654
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full font-medium">
                    SUV
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Automatic
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Fuel:</span> Diesel
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Seats:</span> 5
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 34,200 km
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $89
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                      /day
                    </span>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $580/week
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-rented">Rented</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Returns: May 20
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Emma Johnson
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    May 10-20
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="p-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg"
                      title="Manage Bookings"
                    >
                      <FaCalendarAlt />
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
              {/* Car 3 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-16 h-12 rounded-md bg-linear-to-r from-red-500 to-pink-500 flex items-center justify-center mr-4">
                      <FaCar className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white">
                        Tesla Model 3 2023
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: TES123 • Color: Red
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: 5YJ3E1EA0PF123789
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full font-medium">
                    Electric
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Automatic
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Fuel:</span> Electric
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Seats:</span> 5
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 8,900 km
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $99
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                      /day
                    </span>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $650/week
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-reserved">Reserved</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    From: May 22
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Michael Chen
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Apr 28-May 5
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="p-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg"
                      title="Manage Bookings"
                    >
                      <FaCalendarAlt />
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
              {/* Car 4 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-16 h-12 rounded-md bg-linear-to-r from-amber-500 to-yellow-400 flex items-center justify-center mr-4">
                      <FaCar className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white">
                        Mercedes C-Class 2022
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: MBZ456 • Color: Silver
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: WDDWF5EB2N1234567
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs rounded-full font-medium">
                    Luxury
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Automatic
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Fuel:</span> Petrol
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Seats:</span> 5
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 18,000 km
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $75
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                      /day
                    </span>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $490/week
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-maintenance">
                    Maintenance
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Ready: May 19
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Sarah Davis
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    May 5-12
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="p-2 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-lg"
                      title="Service History"
                    >
                      <FaWrench />
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
            </tbody>
          </table>
        </div>
        {/* Table Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
              Showing
              <span className="font-medium text-gray-700 dark:text-gray-300">
                1
              </span>
              to
              <span className="font-medium text-gray-700 dark:text-gray-300">
                4
              </span>
              of
              <span className="font-medium text-gray-700 dark:text-gray-300">
                24
              </span>
              cars
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              <FaChevronLeft />
            </button>
            <button className="px-3 py-1.5 border border-primary bg-primary text-white rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              2
            </button>
            <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              3
            </button>
            <button className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              4
            </button>
            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalPage;
