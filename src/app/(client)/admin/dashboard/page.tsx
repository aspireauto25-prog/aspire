import { DEFAULT_PAGE } from "@/constants/pagination";
import { getContactInquiries } from "@/api/contactInquiries";
import CarStats from "@/components/admin/cars/Stats";
import ContactInquiryTable from "@/components/admin/inquiries/contact-inquiries/Table";

const DashboardPage = async () => {
  const inquiries = await getContactInquiries({
    page: DEFAULT_PAGE,
    limit: "5",
    recent: "true",
  });

  return (
    <section className="py-10">
      <CarStats />
      <div className="bg-white  dark:bg-gray-800 rounded-xl shadow">
        <h3 className="text-lg font-semibold px-6 py-4">
          Recent Contact Form Submissions
        </h3>
        <div className="overflow-x-auto">
          <ContactInquiryTable inquiries={inquiries.data} />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
