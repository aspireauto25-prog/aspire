import { SearchParams } from "next/dist/server/request/search-params";

import { getReviews } from "@/api/reviews";
import { DEFAULT_PAGE, PAGE_LIMIT } from "@/constants/pagination";
import ReviewInquiryTable from "@/components/admin/inquiries/review-inquiries/Table";
import Pagination from "@/components/admin/table/Pagination";

interface Props {
  searchParams: Promise<SearchParams>;
}

const ReviewInquiresPage = async ({ searchParams }: Props) => {
  return <ReviewInquiresList searchParams={searchParams} />;
};

const ReviewInquiresList = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const inquiries = await getReviews({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT,
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden ">
      <ReviewInquiryTable inquiries={inquiries.data} />
      <Pagination
        currentPage={inquiries.currentPage}
        total={inquiries.total}
        totalPages={inquiries.totalPages}
      />
    </div>
  );
};

export default ReviewInquiresPage;
