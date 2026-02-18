"use client";

import {
  FaBook,
  FaEnvelope,
  FaEye,
  FaHeadset,
  FaMessage,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import { useState } from "react";

import { ContactInquiry } from "@/lib/types/contact.types";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

const PreviewInquiryModal = ({
  email,
  message,
  name,
  phone,
  subject,
}: ContactInquiry) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <FaEye />
      </div>
      <Modal
        show={showModal}
        setShow={setShowModal}
        title="Contact Inquiry"
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
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaEnvelope className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all"
                >
                  {email}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaPhone className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Phone
                </p>
                <a
                  href={`tel:${phone}`}
                  className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all"
                >
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaBook className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Subject
                </p>
                <p className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all">
                  {subject}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-10 min-w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <FaMessage className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Message
                </p>
              </div>
            </div>
            <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">{message}</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button href={`tel:${phone}`} size="md">
                <FaPhone />
                Call Owner
              </Button>
              <Button href={`mailto:${email}`} size="md" theme="light">
                <FaEnvelope />
                Email
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PreviewInquiryModal;
