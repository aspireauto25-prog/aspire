"use client";

import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useState } from "react";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";
import Button from "../Button";

const RentalCarsSearch = () => {
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
    <div className="md:w-2xl mx-auto relative">
      <FaMagnifyingGlass className="absolute left-6 top-5 text-gray-400" />

      <input
        type="text"
        id="search-input"
        placeholder="Search cars by name or category..."
        className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        value={query}
        onKeyDown={(event) => {
          if (event.key != "Enter") return;

          search();
        }}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="flex items-center gap-1 right-3 top-2.5 absolute">
        {query && (
          <button onClick={resetQuery} className="cursor-pointer p-2">
            <FaXmark />
          </button>
        )}
        <Button onClick={search} className="" size="sm" rounded>
          Search
        </Button>
      </div>
    </div>
  );
};

export default RentalCarsSearch;
