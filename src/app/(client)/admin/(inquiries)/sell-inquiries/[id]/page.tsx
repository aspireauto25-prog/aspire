import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";

import { getSellInquiryById } from "@/api/sellInquiries";
import CarImages from "@/components/admin/inquiries/sell-inquiries/CarImages";
import OwnerInfo from "@/components/admin/inquiries/sell-inquiries/OwnerInfo";
import SellInquiryStatus from "@/components/admin/inquiries/sell-inquiries/Status";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const SellInquiryDetailsPage = async ({ params }: Props) => {
  const id = (await params).id;

  const inquiry = await getSellInquiryById(id);

  return (
    <section>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center mb-2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mr-4">
                {inquiry.brand} {inquiry.model} {inquiry?.variant}
              </h2>
              <SellInquiryStatus id={parseInt(id)} status={inquiry.status} />
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaCalendarAlt className="mr-2" />
              <span id="inquiryDate">
                Submitted on {format(inquiry.created_at, "dd MMM, yyyy")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column: Car Details & Images */}
        <div className="lg:col-span-2 space-y-6">
          {inquiry.sell_inquiry_images?.length > 0 ? (
            <CarImages images={inquiry.sell_inquiry_images} />
          ) : null}

          {/* Car Specifications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-900 overflow-hidden">
            <div className="p-6 border-b border-gray-300 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Car Specifications
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Detailed information about the car
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-4">
                    Basic Information
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-300 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Brand
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {inquiry.brand}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-300 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Model
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {inquiry.model}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-300 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Variant
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {inquiry?.variant || "-"}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-300 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Year
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {inquiry?.year || "-"}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pricing & Details */}
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-4">
                    Pricing &amp; Details
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-300 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Mileage
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {inquiry?.mileage || "-"} km
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-300 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Condition
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {inquiry.condition}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-300 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">
                        Asking Price
                      </span>
                      <span className="font-bold text-xl primary-text">
                        $ {inquiry?.price || "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 dark:text-white mb-4">
                  Description
                </h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    {inquiry.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <OwnerInfo
            email={inquiry.owner_email}
            name={inquiry.owner_name}
            phone={inquiry.owner_phone}
          />
        </div>
      </div>
    </section>
  );
};

export default SellInquiryDetailsPage;
