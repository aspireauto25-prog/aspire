import {
  FaCar,
  FaChartLine,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaDollarSign,
  FaEdit,
  FaEye,
  FaInbox,
  FaPlus,
  FaReceipt,
  FaTag,
  FaTrash,
} from "react-icons/fa";

import { ADD_CAR_ROUTE } from "@/constants/routes";
import LinkButton from "@/components/LinkButton";

const CarSalePage = () => {
  return (
    <section>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Total for Sale
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                14
              </h3>
              <p className="text-green-500 text-xs mt-1">+2 from last month</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <FaTag className="text-blue-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Available
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                10
              </h3>
              <p className="text-green-500 text-xs mt-1">71% available</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <FaCheckCircle className="text-green-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Sold This Month
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                3
              </h3>
              <p className="text-yellow-500 text-xs mt-1">+1 from last week</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <FaDollarSign className=" text-yellow-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Avg. Price
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                $28,500
              </h3>
              <p className="text-green-500 text-xs mt-1">
                +5.2% from last month
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <FaChartLine className=" text-purple-500 text-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Action Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Cars for Sale Inventory
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage vehicles available for purchase
            </p>
          </div>
          <LinkButton href={ADD_CAR_ROUTE} size="sm">
            <FaPlus />
            Add New Car
          </LinkButton>
        </div>
        {/* Quick Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-primary text-white text-sm rounded-lg font-medium">
            All Cars
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
            Under $20K
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
            $20K-$40K
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
            Luxury
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
            SUV
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
            Featured
          </button>
        </div>
      </div>
      {/* Sale Cars Table */}
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
                  Price
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Days Listed
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
                        Honda Civic 2021
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: HND456 • Color: Blue
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: 2HGFC2F50MH567890
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
                      <span className="font-medium">Year:</span> 2021
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 42,300 km
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Condition:</span> Excellent
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $19,500
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $350/month financing
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-available-sale">
                    Available
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    4 inquiries
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    12 days
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Listed: May 5
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
                      title="View Inquiries"
                    >
                      <FaInbox />
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
                        Ford F-150 2020
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: FRD789 • Color: Black
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: 1FTFW1RG5LFC12345
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full font-medium">
                    Truck
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Automatic
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Year:</span> 2020
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 58,700 km
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Condition:</span> Good
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $34,900
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $620/month financing
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-sold">Sold</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Sold: May 14
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    28 days
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Listed: Apr 16
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
                      className="p-2 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
                      title="View Sale"
                    >
                      <FaReceipt />
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
                    <div className="w-16 h-12 rounded-md bg-linear-to-r from-amber-500 to-yellow-400 flex items-center justify-center mr-4">
                      <FaCar className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white">
                        Audi Q5 2019
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: AUD123 • Color: Silver
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: WA1ANAFY1K2123456
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs rounded-full font-medium">
                    Luxury SUV
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Automatic
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Year:</span> 2019
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 65,400 km
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Condition:</span> Very Good
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $32,800
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $580/month financing
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-available-sale">
                    Available
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    7 inquiries
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    9 days
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Listed: May 8
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
                      title="View Inquiries"
                    >
                      <FaInbox />
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
                    <div className="w-16 h-12 rounded-md bg-linear-to-r from-red-500 to-pink-500 flex items-center justify-center mr-4">
                      <FaCar className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white">
                        Chevrolet Camaro 2022
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        License: CAM789 • Color: Red
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        VIN: 1G1FH1R72N0123456
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs rounded-full font-medium">
                    Sports Car
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Manual
                  </p>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Year:</span> 2022
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Mileage:</span> 12,800 km
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Condition:</span> Like New
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    $42,500
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    $750/month financing
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-available-sale">
                    Available
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    2 test drives scheduled
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    5 days
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Listed: May 12
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
                      title="View Inquiries"
                    >
                      <FaInbox />
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
                14
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

export default CarSalePage;
