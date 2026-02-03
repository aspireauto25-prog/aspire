import type { SearchParams } from "next/dist/server/request/search-params";

import { getFormattedQuery } from "@/utils/queryFormatter";
import {
  PaginatedRentalCars,
  RentalCarWithDetails,
} from "@/lib/types/rentalCar.types";
import config from "@/config";

export const getRentalCars = async (
  searchParams?: SearchParams,
): Promise<PaginatedRentalCars> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/cars/rent${query}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getRentalCarById = async (
  id: string,
): Promise<RentalCarWithDetails> => {
  const url = `${config.apiUrl}/api/cars/rent/${id}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch rental car.");
  }

  return res.json();
};
