import { FaArrowDown, FaArrowUp, FaCheckCircle, FaClock, FaInbox, FaTachometerAlt } from "react-icons/fa";

const InquiryStats = async () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-blue-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Inquiries</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              156
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <FaInbox className="text-blue-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className=" mr-1" /> 12% from last month
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-green-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Pending Replies</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              24
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <FaClock className="text-green-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className="mr-1" /> 8% from last month
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-purple-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Avg Response Time</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              4.2h
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
            <FaTachometerAlt className="text-purple-500 text-xl" />
          </div>
        </div>
        <p className="text-red-600 text-sm mt-2 flex items-center">
          <FaArrowDown className="mr-1" /> 3% from last month
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-amber-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Resolved Today</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              8
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
            <FaCheckCircle className="text-amber-500 text-xl" />
          </div>
        </div>
        <p className="text-green-600 text-sm mt-2 flex items-center">
          <FaArrowUp className=" mr-1" /> 5% from last month
        </p>
      </div>
    </div>
  );
};

export default InquiryStats;
