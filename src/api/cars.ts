import { cookies } from "next/headers";
import type { SearchParams } from "next/dist/server/request/search-params";

import { Car, PaginatedCars } from "@/lib/types/car.types";
import { getFormattedQuery } from "@/utils/queryFormatter";
import config from "@/config";

export const getCars = async (
  searchParams?: SearchParams
): Promise<PaginatedCars> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/cars${query}`;

  const token = (await cookies()).get("token")?.value;

  const res = await fetch(url, {
    headers: {
      Cookie: `token=${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getCarById = async (id: string): Promise<Car> => {
  const url = `${config.apiUrl}/api/cars/${id}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch car.");
  }

  return res.json();
};
