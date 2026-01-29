import { SearchParams } from "next/dist/server/request/search-params";

import { getContactInquiries } from "@/api/contacts";
import { DEFAULT_PAGE, PAGE_LIMIT } from "@/constants/pagination";
import ContactInquiryTable from "@/components/admin/inquiries/contact-inquiries/Table";
import Filters from "@/components/admin/inquiries/contact-inquiries/Filters";
import Pagination from "@/components/admin/table/Pagination";
import Search from "@/components/admin/Search";

interface Props {
  searchParams: Promise<SearchParams>;
}

const ContactInquiresPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const inquiries = await getContactInquiries({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT,
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <section>
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
