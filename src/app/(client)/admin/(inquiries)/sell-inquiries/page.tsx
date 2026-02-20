import { SearchParams } from "next/dist/server/request/search-params";

import { DEFAULT_PAGE, PAGE_LIMIT } from "@/constants/pagination";
import { getSellInquiries } from "@/api/sellInquiries";
import Pagination from "@/components/admin/table/Pagination";
import Table from "@/components/admin/inquiries/sell-inquiries/Table";

interface Props {
  searchParams: Promise<SearchParams>;
}

const SellInquiresPage = async ({ searchParams }: Props) => {
  return <SellInquiriesList searchParams={searchParams} />;
};

const SellInquiriesList = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const query = await searchParams;

  const inquiries = await getSellInquiries({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT,
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden ">
      <Table inquiries={inquiries.data} />
      <Pagination
        currentPage={inquiries.currentPage}
        total={inquiries.total}
        totalPages={inquiries.totalPages}
      />
    </div>
  );
};

export default SellInquiresPage;
