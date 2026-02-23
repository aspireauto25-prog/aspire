import { format } from "date-fns";
import type { Metadata } from "next";

import { COMMUNITY_GUIDELINES } from "@/constants/legalDocuments";
import { getLegalDocumentByType } from "@/api/legalDocuments";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Our community guidelines for a safe, respectful, and trustworthy car rental, buy-sell, and servicing experience for everyone.",
  keywords: [
    "community guidelines",
    "user conduct",
    "vehicle care policy",
    "marketplace rules",
    "community standards",
  ],
  alternates: {
    canonical: "/community-guidelines",
  },
};

const CommunityGuidelinesPage = async () => {
  const legalDocument = await getLegalDocumentByType(COMMUNITY_GUIDELINES);

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-10 translate-x-48 translate-y-48" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Community <span className="gradient-text">Guidelines</span>
            </h1>
            <p className="text-xl text-gray-300">
              Building a safe, respectful, and trustworthy community together.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Last updated: {format(legalDocument?.updated_at, "MMMM yyyy")}
                </p>
              </div>

              <div className="wysiwyg">
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: legalDocument?.content ?? "",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityGuidelinesPage;
