"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  answer: string;
  question: string;
}

const ServicingFAQ = ({ answer, question }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <button
        className="w-full flex justify-between items-center hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-left">{question}</h3>
        {isOpen ? (
          <FaMinus className="text-primary" />
        ) : (
          <FaPlus className="text-primary" />
        )}
      </button>
      <div className={`mt-4 ${isOpen ? "" : "hidden"}`}>
        <p className="text-gray-600 dark:text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default ServicingFAQ;
