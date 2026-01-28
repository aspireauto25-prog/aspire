import type { SearchParams } from "next/dist/server/request/search-params";

import { getFormattedQuery } from "@/utils/queryFormatter";
import { PaginatedSellInquiries } from "@/lib/types/sellInquiry.types";
import config from "@/config";

export const getSellInquiries = async (
  searchParams?: SearchParams,
): Promise<PaginatedSellInquiries> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/sell-inquiries${query}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};
