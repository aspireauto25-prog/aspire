import type { SearchParams } from "next/dist/server/request/search-params";

import { getFormattedQuery } from "@/utils/queryFormatter";
import { PaginatedCarListings } from "@/lib/types/carListing.types";
import config from "@/config";

export const getCarListings = async (
  searchParams?: SearchParams,
): Promise<PaginatedCarListings> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/cars/listings${query}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};
