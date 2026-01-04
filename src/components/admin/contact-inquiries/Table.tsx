import {
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaInbox,
  FaReply,
  FaUser,
} from "react-icons/fa";
import { format } from "date-fns";

import { Inquiry } from "@/lib/types/contact.types";
import Button from "@/components/Button";

interface Props {
  inquiries: Inquiry[];
}

const ContactInquiryTable = ({ inquiries }: Props) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden ">
        <div className="table-responsive">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Customer Name
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Email Address
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Phone Number
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Subject
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Message
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Date
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
              {inquiries.map((inquiry, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary to-red-700 flex items-center justify-center mr-3 text-white">
                        <FaUser />
                      </div>
                      <p className="font-medium">{inquiry.name}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300 hover:underline">
                    <a href={`mailto:${inquiry.email}`}>{inquiry.email}</a>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300 hover:underline">
                    <a href={`tel:${inquiry.phone}`}>{inquiry.phone}</a>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {inquiry.subject}
                  </td>
                  <td className="py-4 px-6 max-w-xs">
                    <p className="text-gray-700 dark:text-gray-300 truncate">
                      {inquiry.message}
                    </p>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {format(inquiry.created_at, "MMM dd, yyyy")}
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {inquiry.status}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg"
                        title="Reply"
                      >
                        <FaReply />
                      </button>
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="flex gap-1 text-gray-500 dark:text-gray-400 text-sm">
              Showing
              <span className="font-medium text-gray-700 dark:text-gray-300">
                1
              </span>
              to
              <span className="font-medium text-gray-700 dark:text-gray-300">
                6
              </span>
              of
              <span className="font-medium text-gray-700 dark:text-gray-300">
                24
              </span>
              inquiries
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
      {/* Empty State (Hidden by default) */}
      <div className="hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center ">
        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-6">
          <FaInbox className="text-3xl text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          No inquiries found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          All contact inquiries have been processed or no inquiries match your
          filters.
        </p>
        <div className="flex justify-center">
          <Button size="md">Clear Filters</Button>
        </div>
      </div>
    </>
  );
};

export default ContactInquiryTable;
