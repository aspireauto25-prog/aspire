"use client";

import {
  FaCar,
  FaEye,
  FaGear,
  FaHeadset,
  FaMessage,
  FaStar,
  FaUser,
} from "react-icons/fa6";
import { useState } from "react";

import { Review } from "@/lib/types/review.types";
import Modal from "@/components/Modal";

const PreviewInquiryModal = ({
  car,
  email,
  name,
  ratings,
  review,
  service_used,
}: Review) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-950 rounded-lg cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <FaEye />
      </div>
      <Modal
        show={showModal}
        setShow={setShowModal}
        title="Review Inquiry"
        Icon={FaHeadset}
      >
        <div className="text-left p-6">
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mr-4">
              <FaUser />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                {name}
              </h4>
              <p className="font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all">
                {email}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaStar className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ratings
                </p>
                <p className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, ratingIndex) => (
                      <span
                        key={ratingIndex}
                        className={
                          ratingIndex < ratings
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      >
                        <FaStar />
                      </span>
                    ))}
                  </div>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaGear className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Service Used
                </p>
                <p className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
                  {service_used}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaCar className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Car</p>
                <p className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
                  {car ?? "-"}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-10 min-w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaMessage className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Review
                </p>
              </div>
            </div>
            <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">{review}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PreviewInquiryModal;
