import {
  FaCheckCircle,
  FaClock,
  FaInbox,
  FaTachometerAlt,
} from "react-icons/fa";

import { getContactInquiriesCount } from "@/api/contactInquiries";
import { getSellInquiriesCount } from "@/api/sellInquiries";

const InquiryStats = async () => {
  const contactInquiriesCount = await getContactInquiriesCount();
  const sellInquiriesCount = await getSellInquiriesCount();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-blue-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Contact Inquiries</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {contactInquiriesCount.totalCount}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <FaInbox className="text-blue-500 text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-orange-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Pending Contact Replies</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {contactInquiriesCount.pendingCount}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
            <FaClock className="text-orange-500 text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-purple-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Sell Inquiries</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {sellInquiriesCount.totalCount}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
            <FaTachometerAlt className="text-purple-500 text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border-l-4 border-amber-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Pending Sell Replies</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {sellInquiriesCount.pendingCount}
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
            <FaCheckCircle className="text-amber-500 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryStats;
