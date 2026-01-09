"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { KeyboardEvent, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateParams = useUpdateQueryParams();

  function search(event: KeyboardEvent) {
    if (event.key != "Enter") return;

    updateParams({ q: searchTerm });
  }

  function clearSearch() {
    setSearchTerm("");
    updateParams({ q: "" });
  }

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaMagnifyingGlass className="text-gray-400" />
      </span>
      <input
        className="px-10 py-2 rounded-lg border border-gray-300 w-full focus:outline-secondary/80"
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={search}
        placeholder="Search ..."
        type="text"
        value={searchTerm}
      />
      {searchTerm && (
        <button
          className="absolute inset-y-0 right-0 flex items-center px-3 text-red-700 cursor-pointer"
          type="button"
          onClick={clearSearch}
        >
          <RxCross1 />
        </button>
      )}
    </div>
  );
};

export default Search;
