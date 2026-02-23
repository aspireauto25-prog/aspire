import { LegalDocument } from "@/lib/types/legalDocuments.types";
import config from "@/config";

export const getLegalDocumentByType = async (
  type: string,
): Promise<LegalDocument> => {
  const url = `${config.apiUrl}/api/legal-documents/${type}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};
