import { sellInquiryFilters } from "@/constants/sellInquiries";
import Filters from "@/components/admin/inquiries/Filters";
import Search from "@/components/admin/Search";

const SellInquiresLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              All Sell Inquiries
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage customer inquiries from website sell forms
            </p>
          </div>
          <Search />
        </div>
        <Filters filters={sellInquiryFilters} />
      </div>

      {children}
    </section>
  );
};

export default SellInquiresLayout;
