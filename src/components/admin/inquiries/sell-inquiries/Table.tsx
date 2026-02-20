import { FaCog, FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { SELL_INQUIRIES_ROUTE } from "@/constants/routes";
import { SellInquiry } from "@/lib/types/sellInquiry.types";
import EmptyData from "../../../EmptyData";
import SellInquiryStatus from "./Status";

import logoUrl from "@/assets/images/logo.png";

interface Props {
  inquiries: SellInquiry[];
}

const Table = async ({ inquiries }: Props) => {
  return (
    <div className="table-responsive">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Car Details
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Condition
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Price
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Description
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Owner&apos;s Info
            </th>
            <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              Status
            </th>
            <th className="text-right py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
              <div className="flex justify-center">
                <FaCog />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {inquiries.map((inquiry) => (
            <tr
              key={inquiry.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <td className="py-4 px-6">
                <Link href={`${SELL_INQUIRIES_ROUTE}/${inquiry.id}`}>
                  <div className="flex items-center">
                    <Image
                      src={
                        inquiry.sell_inquiry_images.length > 0
                          ? inquiry.sell_inquiry_images[0].url
                          : logoUrl
                      }
                      alt={inquiry.brand}
                      height={80}
                      width={100}
                      className="min-w-24 h-16 rounded flex items-center justify-center mr-4 object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white space-x-1">
                        <span>{inquiry.brand}</span>
                        <span>{inquiry.model}</span>
                        <span>{inquiry.variant}</span>
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Year: {inquiry.year}
                      </p>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="py-4 px-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium whitespace-nowrap">
                  {inquiry.condition ?? "-"}
                </span>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  <span className="font-medium mr-1">Mileage:</span>
                  {inquiry.mileage ? <span>{inquiry.mileage} km</span> : "-"}
                </p>
              </td>
              <td className="py-4 px-6">
                <p className="font-bold text-gray-800 dark:text-white text-lg">
                  ${inquiry.price}
                </p>
              </td>
              <td className="py-4 px-6 max-w-xs">
                <p className="text-sm truncate">{inquiry.description}</p>
              </td>
              <td className="py-4 px-6">
                <div className="space-y-1 whitespace-nowrap">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Name:</span>
                    <span>{inquiry.owner_name ?? "-"}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Email:</span>
                    <span>{inquiry.owner_email ?? "-"}</span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-1">Phone:</span>
                    {inquiry.owner_name}
                  </p>
                </div>
              </td>
              <td className="py-4 px-6">
                <SellInquiryStatus id={inquiry.id} status={inquiry.status} />
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">
                  <Link
                    href={`${SELL_INQUIRIES_ROUTE}/${inquiry.id}`}
                    className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-950 rounded-lg"
                  >
                    <FaEye />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {inquiries.length == 0 && <EmptyData />}
    </div>
  );
};

export default Table;
