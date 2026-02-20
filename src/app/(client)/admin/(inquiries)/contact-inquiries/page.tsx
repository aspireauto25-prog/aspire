import { SearchParams } from "next/dist/server/request/search-params";

import { getContactInquiries } from "@/api/contactInquiries";
import { DEFAULT_PAGE, PAGE_LIMIT } from "@/constants/pagination";
import ContactInquiryTable from "@/components/admin/inquiries/contact-inquiries/Table";
import Pagination from "@/components/admin/table/Pagination";

interface Props {
  searchParams: Promise<SearchParams>;
}

const ContactInquiresPage = async ({ searchParams }: Props) => {
  return <ContactInquiresList searchParams={searchParams} />;
};

const ContactInquiresList = async ({ searchParams }: Props) => {
  const query = await searchParams;

  const inquiries = await getContactInquiries({
    page: query.page ?? DEFAULT_PAGE,
    limit: PAGE_LIMIT,
    search: query.q ?? "",
    status: query.status ?? "",
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden ">
      <ContactInquiryTable inquiries={inquiries.data} />
      <Pagination
        currentPage={inquiries.currentPage}
        total={inquiries.total}
        totalPages={inquiries.totalPages}
      />
    </div>
  );
};

export default ContactInquiresPage;
