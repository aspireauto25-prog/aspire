import { cookies } from "next/headers";
import type { SearchParams } from "next/dist/server/request/search-params";

import { getFormattedQuery } from "@/utils/queryFormatter";
import { PaginatedReviews, Review } from "@/lib/types/review.types";
import config from "@/config";

export const getReviews = async (
  searchParams?: SearchParams,
): Promise<PaginatedReviews> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/reviews${query}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getReviewById = async (id: string): Promise<Review> => {
  const url = `${config.apiUrl}/api/reviews/${id}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      cookie: (await cookies()).toString(),
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};
