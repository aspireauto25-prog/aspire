import { cookies } from "next/headers";
import type { SearchParams } from "next/dist/server/request/search-params";

import { getFormattedQuery } from "@/utils/queryFormatter";
import {
  PaginatedSellInquiries,
  SellInquiry,
} from "@/lib/types/sellInquiry.types";
import config from "@/config";

export const getSellInquiries = async (
  searchParams?: SearchParams,
): Promise<PaginatedSellInquiries> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/sell-inquiries${query}`;

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

export const getSellInquiryById = async (id: string): Promise<SellInquiry> => {
  const url = `${config.apiUrl}/api/sell-inquiries/${id}`;

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

export const getSellInquiriesCount = async (): Promise<{
  totalCount: number;
  pendingCount: number;
}> => {
  const url = `${config.apiUrl}/api/sell-inquiries/count`;

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
