"use client";

import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useState } from "react";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

const BuySearch = () => {
  const [query, setQuery] = useState<string>("");

  const updateParams = useUpdateQueryParams();

  function resetQuery() {
    setQuery("");
    updateParams({ q: "" });
  }

  function search() {
    if (query) updateParams({ q: query });
  }

  return (
    <div className="relative flex-1 md:w-64">
      <FaMagnifyingGlass className="absolute left-4 top-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search cars..."
        className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
        value={query}
        onKeyDown={(event) => {
          if (event.key != "Enter") return;

          search();
        }}
        onChange={(event) => setQuery(event.target.value)}
      />
      {query && (
        <button
          onClick={resetQuery}
          className="p-2 absolute right-2 top-2 text-gray-400"
        >
          <FaXmark />
        </button>
      )}
    </div>
  );
};

export default BuySearch;
