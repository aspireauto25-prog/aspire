"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";

import Button from "../Button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

const RentalCarsSearch = () => {
  const [query, setQuery] = useState<string>();

  const pathname = usePathname();
  const router = useRouter();

  function searchRentalCars() {
    router.push(`?q=${query}`);
  }

  function resetFilters() {
    setQuery("");
    router.replace(pathname);
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
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex items-center gap-1 right-3 top-2.5 absolute">
        {query && (
          <button onClick={resetFilters} className="cursor-pointer p-2">
            <FaTimes />
          </button>
        )}
        <Button onClick={searchRentalCars} className="" size="sm" rounded>
          Search
        </Button>
      </div>
    </div>
  );
};

export default RentalCarsSearch;
