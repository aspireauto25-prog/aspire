import React from "react";
import { FaCheckCircle, FaClock, FaInbox, FaTachometerAlt } from "react-icons/fa";

const ContactInquiresLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Total Inquiries
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                156
              </h3>
              <p className="text-green-500 text-xs mt-1">
                +12% from last month
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <FaInbox className=" text-blue-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Pending Replies
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                24
              </h3>
              <p className="text-yellow-500 text-xs mt-1">+3 from yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <FaClock className=" text-yellow-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Avg Response Time
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                4.2h
              </h3>
              <p className="text-green-500 text-xs mt-1">
                -0.8h from last week
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <FaTachometerAlt className=" text-green-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Resolved Today
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                8
              </h3>
              <p className="text-blue-500 text-xs mt-1">+2 from yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <FaCheckCircle className="text-purple-500 text-xl" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default ContactInquiresLayout;
