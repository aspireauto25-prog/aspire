"use client";

import { ContactInquiry } from "@/lib/types/contact.types";
import api from ".";

export const sendContactInquiry = async (data: ContactInquiry) =>
  await api.post(`/api/contact-inquiries`, data);

export const updateContactInquiryStatus = async (id: number, status?: number) =>
  await api.patch(`/api/contact-inquiries/${id}`, { status });
