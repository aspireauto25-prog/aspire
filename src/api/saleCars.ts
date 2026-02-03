import type { SearchParams } from "next/dist/server/request/search-params";

import { getFormattedQuery } from "@/utils/queryFormatter";
import {
  PaginatedSaleCars,
  SaleCarWithDetails,
} from "@/lib/types/saleCar.types";
import config from "@/config";

export const getSaleCars = async (
  searchParams?: SearchParams,
): Promise<PaginatedSaleCars> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/cars/sale${query}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getSaleCarById = async (
  id: string,
): Promise<SaleCarWithDetails> => {
  const url = `${config.apiUrl}/api/cars/sale/${id}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch sale car.");
  }

  return res.json();
};
