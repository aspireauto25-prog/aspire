"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useUpdateQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (updates: Record<string, string | number | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "" || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };
}
