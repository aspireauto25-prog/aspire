import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we collect, use, and protect your personal information when using our car rental, buy-sell, and servicing platform.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "car rental privacy",
    "data security",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    intro:
      "We collect information that you provide directly to us and information that is collected automatically when you use our services.",
    subsections: [
      {
        subtitle: "Personal Information",
        items: [
          "Full name, date of birth, and contact details (email, phone number, address).",
          "Driver's licence details and identification documents.",
          "Payment and billing information (credit/debit card details, bank account info).",
          "Vehicle ownership and registration details (for buy-sell transactions).",
          "Service history and vehicle information (for servicing requests).",
        ],
      },
      {
        subtitle: "Automatically Collected Information",
        items: [
          "IP address, browser type, operating system, and device identifiers.",
          "Pages visited, time spent on pages, and navigation patterns.",
          "Location data (if you grant permission through your device settings).",
          "Cookies and similar tracking technologies.",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    items: [
      "Processing rental bookings, vehicle purchases/sales, and service appointments.",
      "Verifying your identity and eligibility for our services.",
      "Processing payments, refunds, and security deposits.",
      "Communicating with you about your bookings, transactions, and service updates.",
      "Sending promotional offers, newsletters, and marketing communications (with your consent).",
      "Improving our platform, services, and customer experience.",
      "Complying with legal obligations and resolving disputes.",
      "Preventing fraud, unauthorised access, and other illegal activities.",
    ],
  },
  {
    title: "3. Cookies & Tracking Technologies",
    intro:
      "We use cookies and similar technologies to enhance your experience on our platform.",
    subsections: [
      {
        subtitle: "Types of Cookies We Use",
        items: [
          "Essential Cookies — required for core platform functionality such as login and checkout.",
          "Analytics Cookies — help us understand how visitors interact with our website.",
          "Preference Cookies — remember your settings and preferences for future visits.",
          "Marketing Cookies — used to deliver relevant advertisements and track campaign effectiveness.",
        ],
      },
    ],
    footer:
      "You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect platform functionality.",
  },
  {
    title: "4. How We Share Your Information",
    intro:
      "We do not sell your personal information. We may share your data in the following circumstances:",
    items: [
      "With service providers and partners who assist in delivering our services (e.g., payment processors, insurance providers).",
      "With government or regulatory authorities when required by law or to comply with legal processes.",
      "With third-party vehicle inspection or valuation services (for buy-sell transactions, with your consent).",
      "In connection with a merger, acquisition, or sale of assets, where your information may be transferred.",
      "To protect the rights, property, or safety of our company, customers, or the public.",
    ],
  },
  {
    title: "5. Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. These measures include encryption (SSL/TLS), secure data storage, access controls, and regular security audits. While we strive to protect your data, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Your Rights",
    intro:
      "Under the Australian Privacy Act 1988 and applicable laws, you have the following rights:",
    items: [
      "Access — request a copy of the personal information we hold about you.",
      "Correction — request correction of inaccurate or incomplete personal information.",
      "Deletion — request deletion of your personal data, subject to legal obligations.",
      "Opt-out — unsubscribe from marketing communications at any time.",
      "Restriction — request that we limit how we process your personal data.",
      "Portability — request your data in a commonly used, machine-readable format.",
      "Complaint — lodge a complaint with the Office of the Australian Information Commissioner (OAIC).",
    ],
    footer:
      "To exercise any of these rights, please contact us through our website's contact page.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Rental and transaction records are retained for a minimum of 7 years in accordance with Australian tax and business law requirements. You may request deletion of your data at any time; however, certain information may be retained where legally required.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party services you interact with through our platform.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information promptly.",
  },
  {
    title: "10. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. We will notify you of significant changes by posting the updated policy on our website with a revised 'Last updated' date. We encourage you to review this page periodically.",
  },
  {
    title: "11. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please reach out to us through our website's contact page or visit us in person at our office.",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-10 translate-x-48 translate-y-48" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-300">
              How we collect, use, and protect your personal information.
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
                  Last updated: February 2026
                </p>
              </div>

              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={index} className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                      {section.title}
                    </h2>

                    {section.intro && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {section.intro}
                      </p>
                    )}

                    {section.content && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {section.subsections &&
                      section.subsections.map((sub, si) => (
                        <div key={si} className="mt-4">
                          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">
                            {sub.subtitle}
                          </h3>
                          <ul className="space-y-3">
                            {sub.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start text-gray-600 dark:text-gray-300"
                              >
                                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {section.items && !section.subsections && (
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 italic">
                        {section.footer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
