import { format } from "date-fns";
import type { Metadata } from "next";

import { getLegalDocumentByType } from "@/api/legalDocuments";
import { TERMS_AND_CONDITIONS } from "@/constants/legalDocuments";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using our car rental, vehicle buy-sell, and servicing platform. Understand your rights and responsibilities.",
  keywords: [
    "terms and conditions",
    "car rental terms",
    "vehicle purchase terms",
    "servicing agreement",
    "user agreement",
  ],
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const TermsAndConditionsPage = async () => {
  const legalDocument = await getLegalDocumentByType(TERMS_AND_CONDITIONS);

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-10 translate-x-48 translate-y-48" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Terms &amp; <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our services.
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
                  Last updated: {format(legalDocument?.updated_at, "dd MMMM, yyyy")}
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

export default TermsAndConditionsPage;
