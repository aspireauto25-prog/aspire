"use client";

import { faqData } from "@/data/contact";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQItem = (props: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg faq-item">
      <div>
        <button
          className="w-full flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-bold text-left">{props.question}</h3>
          {isOpen ? (
            <FaMinus className="text-primary" />
          ) : (
            <FaPlus className="text-primary" />
          )}
        </button>
        {isOpen && (
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300">{props.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ContactFAQ = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
      <div id="faq-container" className="max-w-3xl mx-auto space-y-6">
        {faqData.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default ContactFAQ;
