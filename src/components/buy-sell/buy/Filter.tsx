"use client";

import { FaBolt, FaCar, FaCarAlt } from "react-icons/fa";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

interface Props {
  currentCategory?: string | string[];
}

const filters = [
  { label: "All Cars", value: "" },
  { Icon: FaCarAlt, label: "Sedan", value: "Sedan" },
  { Icon: FaCar, label: "SUVs", value: "SUV" },
  { Icon: FaBolt, label: "Electric", value: "Electric Vehicle" },
];

const BuyFilter = ({ currentCategory }: Props) => {
  const updateParams = useUpdateQueryParams();

  function filter(category: string) {
    updateParams({ category });
  }

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => filter(item.value.toString())}
          className={`flex items-center gap-2 filter-btn px-4 py-2 rounded-full cursor-pointer ${
            item.value == currentCategory
              ? "active bg-primary text-white"
              : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {item.Icon && <item.Icon />} {item.label}
        </button>
      ))}
    </div>
  );
};

export default BuyFilter;
