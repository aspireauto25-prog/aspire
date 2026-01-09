import { FaCar, FaEdit, FaTrash } from "react-icons/fa";

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
              <span className="status-badge status-available">Available</span>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
