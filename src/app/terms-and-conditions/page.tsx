import type { Metadata } from "next";

import config from "@/config";

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

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the services provided by " +
      "our platform, including car rental, vehicle buy-sell, and servicing, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Eligibility",
    items: [
      "You must be at least 21 years of age to rent a vehicle.",
      "You must hold a valid, full driver's licence recognised in Australia.",
      "You must provide valid identification and proof of address when required.",
      "Corporate rentals must be arranged through an authorised representative of the business.",
    ],
  },
  {
    title: "3. Car Rental Terms",
    items: [
      "All rental periods are calculated on a 24-hour basis from the time of pickup.",
      "Late returns may incur additional charges at the applicable daily rate.",
      "Vehicles must be returned in the same condition as received, with the same fuel level.",
      "Smoking, vaping, and transporting pets without prior approval is strictly prohibited in rental vehicles.",
      "The renter is responsible for all traffic fines, tolls, and infringements incurred during the rental period.",
      "We reserve the right to charge a cleaning fee if the vehicle is returned in an excessively dirty condition.",
    ],
  },
  {
    title: "4. Vehicle Buy & Sell Terms",
    items: [
      "All listed vehicle prices are in Australian Dollars (AUD) and are subject to change without notice.",
      "Vehicle descriptions are provided in good faith; however, buyers are encouraged to conduct independent inspections.",
      "A non-refundable deposit may be required to secure a vehicle purchase.",
      "Transfer of ownership will be processed upon full payment and completion of all required documentation.",
      "Sellers must provide accurate and truthful information about the vehicle's condition, history, and mileage.",
      "We act as a facilitator and do not guarantee the condition or history of vehicles listed by third-party sellers.",
    ],
  },
  {
    title: "5. Servicing Terms",
    items: [
      "Service quotes are estimates and may vary based on the actual condition of the vehicle upon inspection.",
      "We use genuine or high-quality aftermarket parts unless otherwise agreed upon with the customer.",
      "Completed services must be collected within 7 days; storage fees may apply after this period.",
      "A warranty period applies to servicing work as specified at the time of service — details will be provided on your invoice.",
      "We are not liable for pre-existing conditions not identified at the time of service intake.",
    ],
  },
  {
    title: "6. Payment & Pricing",
    items: [
      "All payments are to be made in Australian Dollars (AUD).",
      "We accept major credit/debit cards, bank transfers, and other approved payment methods.",
      "A security bond or pre-authorisation may be required for rental vehicles.",
      "Prices displayed on the website may differ from in-store pricing; online bookings will honour the price shown at the time of booking.",
      "Refunds, where applicable, will be processed within 7–14 business days to the original payment method.",
    ],
  },
  {
    title: "7. Cancellation & Refunds",
    items: [
      "Rental cancellations made 48 hours or more before the pickup time are eligible for a full refund.",
      "Cancellations within 48 hours may incur a cancellation fee of up to 50% of the booking value.",
      "No-shows will be charged the full rental amount.",
      "Service appointment cancellations should be made at least 24 hours in advance.",
      "Vehicle purchase deposits are non-refundable unless otherwise stated in writing.",
    ],
  },
  {
    title: "8. Insurance & Liability",
    items: [
      "Basic insurance coverage is included with all rental vehicles; excess reduction options are available at additional cost.",
      "The renter is liable for any damage to the vehicle up to the excess amount specified in the rental agreement.",
      `${config.appName || "Our company"} is not liable for personal belongings left in vehicles.`,
      "Damage caused by negligence, reckless driving, or breach of rental terms is not covered by insurance.",
      "Comprehensive vehicle insurance details will be provided at the time of rental or purchase.",
    ],
  },
  {
    title: "9. User Responsibilities",
    items: [
      "Users must provide accurate and up-to-date personal information.",
      "Users must not use the platform for any unlawful or fraudulent purposes.",
      "Users are responsible for maintaining the confidentiality of their account credentials.",
      "Any misuse of rental vehicles, including illegal activities, will result in immediate termination of the rental agreement and may be reported to authorities.",
    ],
  },
  {
    title: "10. Modifications to Terms",
    content:
      "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of our services following any changes constitutes acceptance of the revised terms. We encourage you to review this page periodically.",
  },
  {
    title: "11. Governing Law",
    content:
      "These Terms & Conditions are governed by and construed in accordance with the laws of Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Australia.",
  },
  {
    title: "12. Contact Us",
    content:
      "If you have any questions about these Terms & Conditions, please contact us through our website's contact page or visit us in person at our office.",
  },
];

const TermsAndConditionsPage = () => {
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
                  Last updated: February 2026
                </p>
              </div>

              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={index} className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                      {section.title}
                    </h2>

                    {section.content && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
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

export default TermsAndConditionsPage;
