import type { SearchParams } from "next/dist/server/request/search-params";

import { PaginatedCars } from "@/lib/types/car.types";
import { getFormattedQuery } from "@/utils/queryFormatter";
import config from "@/config";

export const getRentalCars = async (
  searchParams?: SearchParams
): Promise<PaginatedCars> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/cars/rent${query}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};
