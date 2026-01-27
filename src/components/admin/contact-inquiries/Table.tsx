import { FaEye, FaReply, FaUser } from "react-icons/fa";
import { format } from "date-fns";

import { Inquiry } from "@/lib/types/contact.types";
import EmptyTable from "../EmptyTable";

interface Props {
  inquiries: Inquiry[];
}

const ContactInquiryTable = ({ inquiries }: Props) => {
  return (
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
                  <div className="min-w-10 h-10 rounded-full bg-linear-to-r from-primary to-red-700 flex items-center justify-center mr-3 text-white">
                    <FaUser />
                  </div>
                  <p className="font-medium">{inquiry.name}</p>
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300 hover:underline">
                <a href={`mailto:${inquiry.email}`}>{inquiry.email}</a>
              </td>
              <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300 hover:underline">
                <a href={`tel:${inquiry.phone}`}>{inquiry.phone}</a>
              </td>
              <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                {inquiry.subject}
              </td>
              <td className="py-4 px-6 text-sm max-w-xs">
                <p className="text-gray-700 dark:text-gray-300 truncate">
                  {inquiry.message}
                </p>
              </td>
              <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                {format(inquiry.created_at, "MMM dd, yyyy")}
              </td>
              <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
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
      {/* Empty State (Hidden by default) */}
      {inquiries.length == 0 && <EmptyTable />}
    </div>
  );
};

export default ContactInquiryTable;
