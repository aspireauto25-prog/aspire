import { contactFilters } from "@/constants/contact";
import Filters from "@/components/admin/inquiries/Filters";
import Search from "@/components/admin/Search";

const ContactInquiresLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
        <Filters filters={contactFilters} />
      </div>

      {children}
    </section>
  );
};

export default ContactInquiresLayout;
