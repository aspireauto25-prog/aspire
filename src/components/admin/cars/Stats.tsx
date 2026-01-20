import { getCountByStatus } from "@/api/cars";
import {
  CAR_STATUS_AVAILABLE,
  CAR_STATUS_MAINTENANCE,
  CAR_STATUS_RENTED,
} from "@/constants/cars";
import {
  FaArrowDown,
  FaArrowUp,
  FaCar,
  FaCheck,
  FaKey,
  FaTools,
} from "react-icons/fa";

const CarStats = async () => {
  const data = await getCountByStatus();

  const counts = data?.reduce(
    (acc, { status, count }) => {
      acc.total += count;

      if (status === CAR_STATUS_AVAILABLE) acc.available = count;
      if (status === CAR_STATUS_RENTED) acc.rented = count;
      if (status === CAR_STATUS_MAINTENANCE) acc.maintenance = count;

      return acc;
    },
    {
      total: 0,
      available: 0,
      rented: 0,
      maintenance: 0,
    },
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-blue-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Cars</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {counts.total}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <FaCar className="text-blue-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className=" mr-1" /> 12% from last month
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-green-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Available</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {counts.available}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheck className="text-green-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className="mr-1" /> 8% from last month
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-purple-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Rented</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {counts.rented}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
            <FaKey className="text-purple-500 text-xl" />
          </div>
        </div>
        <p className="text-red-600 text-sm mt-2 flex items-center">
          <FaArrowDown className="mr-1" /> 3% from last month
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-amber-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Under Maintenance</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {counts.maintenance}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
            <FaTools className="text-amber-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className=" mr-1" /> 5% from last month
        </p>
      </div>
    </div>
  );
};

export default CarStats;
