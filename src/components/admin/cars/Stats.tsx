import {
  FaArrowDown,
  FaArrowUp,
  FaCar,
  FaCheckCircle,
  FaRoad,
  FaTools,
} from "react-icons/fa";

const CarStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Cars</p>
            <p className="text-2xl font-bold text-gray-800">127</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <FaCar className="text-blue-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className=" mr-1" /> 12% from last month
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-5 border-l-4 border-green-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Available</p>
            <p className="text-2xl font-bold text-gray-800">84</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheckCircle className="text-green-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className="mr-1" /> 8% from last month
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-5 border-l-4 border-yellow-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Rented</p>
            <p className="text-2xl font-bold text-gray-800">32</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
            <FaRoad className="text-yellow-500 text-xl" />
          </div>
        </div>
        <p className="text-red-600 text-sm mt-2 flex items-center">
          <FaArrowDown className="mr-1" /> 3% from last month
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-5 border-l-4 border-primary">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Under Maintenance</p>
            <p className="text-2xl font-bold text-gray-800">11</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
            <FaTools className="text-primary text-xl" />
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
