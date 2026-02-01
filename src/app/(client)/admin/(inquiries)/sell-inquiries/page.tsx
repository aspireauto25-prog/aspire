import { SearchParams } from "next/dist/server/request/search-params";

import { DEFAULT_PAGE, PAGE_LIMIT } from "@/constants/pagination";
import Filters from "@/components/admin/inquiries/contact-inquiries/Filters";
import Pagination from "@/components/admin/table/Pagination";
import Search from "@/components/admin/Search";
import Table from "@/components/admin/inquiries/sell-inquiries/Table";
import { getSellInquiries } from "@/api/sellInquiries";

interface Props {
  searchParams: Promise<SearchParams>;
}

const SellInquiresPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const inquiries = await getSellInquiries({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT,
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <section>
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
        <Table inquiries={inquiries.data} />
        <Pagination
          currentPage={inquiries.currentPage}
          total={inquiries.total}
          totalPages={inquiries.totalPages}
        />
      </div>
    </section>
  );
};

export default SellInquiresPage;
