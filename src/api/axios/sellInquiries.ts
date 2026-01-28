"use client";

import { SellInquiry } from "@/lib/types/sellInquiry.types";
import api from ".";

export const createSellInquiry = async (data: SellInquiry) =>
  await api.post(`/api/sell-inquiries`, data);

export const uploadSellInquiryImages = async (
  car_id: number,
  images: { url: string; featured?: boolean }[],
) => await api.post(`/api/sell-inquiries/images`, { car_id, images });
