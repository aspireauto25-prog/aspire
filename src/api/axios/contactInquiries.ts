"use client";

import api from ".";

export const updateContactInquiryStatus = async (id: number, status?: number) =>
  await api.patch(`/api/contact/inquiries/${id}`, { status });
