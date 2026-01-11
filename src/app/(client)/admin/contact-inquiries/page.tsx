import {
  FaCheckCircle,
  FaClock,
  FaInbox,
  FaTachometerAlt,
} from "react-icons/fa";
import { SearchParams } from "next/dist/server/request/search-params";

import { getContactInquiries } from "@/api/contacts";
import { PAGE_LIMIT } from "@/constants/pagination";
import ContactInquiryTable from "@/components/admin/contact-inquiries/Table";
import Filters from "@/components/admin/contact-inquiries/Filters";
import Pagination from "@/components/admin/table/Pagination";
import Search from "@/components/admin/Search";

interface Props {
  searchParams: Promise<SearchParams>;
}

const DEFAULT_PAGE = "1";

const ContactInquiresPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const inquiries = await getContactInquiries({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT.toString(),
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <section>
      {/* Stats Cards */}
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
      {/* Filters and Actions */}
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              All Contact Inquiries
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage customer inquiries from website contact forms
            </p>
          </div>

          <Search />
        </div>
        <Filters currentStatus={query.status ?? ""} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden ">
        <ContactInquiryTable inquiries={inquiries.data} />
        <Pagination
          currentPage={inquiries.currentPage}
          total={inquiries.total}
          totalPages={inquiries.totalPages}
        />
      </div>
    </section>
  );
};

export default ContactInquiresPage;
