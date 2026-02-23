"use client";

import api from ".";

export const addLegalDocuments = async (type: string, content: string) =>
  await api.post(`/api/legal-documents`, { type, content });
