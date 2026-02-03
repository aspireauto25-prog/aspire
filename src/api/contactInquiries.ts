import { cookies } from "next/headers";
import type { SearchParams } from "next/dist/server/request/search-params";

import { getFormattedQuery } from "@/utils/queryFormatter";
import { ContactInquiry, PaginatedInquiries } from "@/lib/types/contact.types";
import config from "@/config";

export const getContactInquiries = async (
  searchParams?: SearchParams,
): Promise<PaginatedInquiries> => {
  const query = getFormattedQuery(searchParams);

  const url = `${config.apiUrl}/api/contact-inquiries${query}`;

  const res = await fetch(url, {
    headers: {
      cookie: (await cookies()).toString(),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getContactInquiryById = async (
  id: string,
): Promise<ContactInquiry> => {
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

export const getContactInquiriesCount = async (): Promise<{
  totalCount: number;
  pendingCount: number;
}> => {
  const url = `${config.apiUrl}/api/contact-inquiries/count`;

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
