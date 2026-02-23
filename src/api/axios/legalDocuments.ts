"use client";

import api from ".";

export const addLegalDocument = async (type: string, content: string) =>
  await api.post(`/api/legal-documents`, { type, content });
