import type { SearchParams } from "next/dist/server/request/search-params";

import { Car, PaginatedCars } from "@/lib/types/car.types";
import { getFormattedQuery } from "@/utils/queryFormatter";
import config from "@/config";

export const getCars = async (
  searchParams?: SearchParams,
): Promise<PaginatedCars> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/cars${query}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getCarById = async (id: string): Promise<Car> => {
  const url = `${config.apiUrl}/api/cars/${id}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch car.");
  }

  return res.json();
};

export const getCountByStatus = async (): Promise<
  { status: number; count: number }[]
> => {
  const url = `${config.apiUrl}/api/cars/status`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch cars count.");
  }

  return res.json();
};
