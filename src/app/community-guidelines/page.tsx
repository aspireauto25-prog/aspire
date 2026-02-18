import {
  FaBalanceScale,
  FaBan,
  FaCar,
  FaExclamationTriangle,
  FaFlag,
  FaHandshake,
  FaHeart,
  FaListOl,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import type { Metadata } from "next";
import type { IconType } from "react-icons";

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

interface Section {
  icon: IconType;
  title: string;
  description: string;
  items: string[];
}

const sections: Section[] = [
  {
    icon: FaHandshake,
    title: "Respectful Interactions",
    description:
      "We are committed to building a community based on mutual respect. We expect all members to:",
    items: [
      "Treat staff, fellow renters, buyers, sellers, and service partners with courtesy and professionalism.",
      "Communicate clearly and honestly in all transactions and interactions.",
      "Respect cultural differences and avoid discriminatory language or behaviour.",
      "Resolve disputes calmly; contact our support team if you need assistance.",
    ],
  },
  {
    icon: FaCar,
    title: "Vehicle Care & Responsibility",
    description:
      "Please treat all vehicles — rented, purchased, or in service — with care and responsibility:",
    items: [
      "Return rental vehicles on time, clean, and in the same condition as received.",
      "Report any damage, mechanical issues, or accidents immediately.",
      "Do not smoke, vape, or consume alcohol in rental vehicles.",
      "Follow all traffic laws, speed limits, and road rules at all times.",
      "Do not use rental vehicles for any illegal activities, racing, or off-road driving (unless explicitly permitted).",
      "Keep vehicles secured and locked when unattended.",
    ],
  },
  {
    icon: FaStar,
    title: "Honest Listings & Reviews",
    description:
      "Transparency and honesty are essential to our marketplace community:",
    items: [
      "Provide accurate and truthful descriptions when listing a vehicle for sale.",
      "Include clear, recent photographs that accurately represent the vehicle's condition.",
      "Disclose all known defects, past accidents, outstanding finance, or title issues.",
      "Leave honest and constructive reviews of your experiences.",
      "Do not post fake reviews, ratings, or testimonials.",
      "Report inaccurate listings to our team for review.",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Safety & Security",
    description:
      "Your safety is our priority. Please follow these safety guidelines:",
    items: [
      "Never share your account login credentials with others.",
      "Verify the identity of buyers/sellers before completing private transactions.",
      "Meet in safe, public locations when conducting vehicle inspections or exchanges.",
      "Do not share sensitive personal or financial information outside of secure platform channels.",
      "Report any suspicious activity, scams, or safety concerns immediately.",
    ],
  },
  {
    icon: FaBan,
    title: "Prohibited Conduct",
    description:
      "The following behaviours are strictly prohibited and will result in action:",
    items: [
      "Fraudulent activities, including fake listings, identity theft, or payment fraud.",
      "Harassment, intimidation, threats, or any form of abuse towards others.",
      "Discrimination based on race, religion, gender, age, disability, or any other protected characteristic.",
      "Tampering with vehicle odometers, safety features, or documentation.",
      "Using the platform to facilitate illegal activities of any kind.",
      "Spamming, phishing, or distributing malicious content on the platform.",
      "Attempting to circumvent platform security measures or exploit vulnerabilities.",
    ],
  },
  {
    icon: FaBalanceScale,
    title: "Fair Pricing & Transactions",
    description:
      "We encourage fair and transparent pricing practices in our community:",
    items: [
      "Price vehicles fairly based on market value, condition, and mileage.",
      "Do not engage in price gouging, bait-and-switch tactics, or hidden fee practices.",
      "Honour agreed-upon prices and terms once a transaction is confirmed.",
      "Complete payments through approved and secure methods only.",
    ],
  },
  {
    icon: FaHeart,
    title: "Environmental Responsibility",
    description:
      "We encourage our community to be environmentally conscious:",
    items: [
      "Drive fuel-efficiently; avoid unnecessary idling and aggressive driving.",
      "Dispose of vehicle-related waste (oil, tyres, batteries) responsibly and at designated facilities.",
      "Consider eco-friendly vehicle options when renting or purchasing.",
      "Report any oil leaks, excessive emissions, or environmental hazards to our servicing team.",
    ],
  },
  {
    icon: FaFlag,
    title: "Reporting Violations",
    description:
      "Help us maintain a safe and trustworthy community by reporting issues:",
    items: [
      "Report violations of these guidelines through our website's contact page.",
      "Provide as much detail as possible, including screenshots, dates, and relevant information.",
      "All reports will be reviewed confidentially and investigated promptly.",
      "Do not take enforcement into your own hands — let our team handle disputes.",
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: "Consequences of Violations",
    description:
      "Violations of these community guidelines may result in:",
    items: [
      "A formal warning for first-time or minor offences.",
      "Temporary suspension of your account and access to services.",
      "Permanent ban from the platform for serious or repeated violations.",
      "Financial penalties to cover damages, losses, or costs incurred.",
      "Reporting to law enforcement authorities for illegal activities.",
      "Our team reserves the right to take appropriate action based on the severity of the violation.",
    ],
  },
  {
    icon: FaListOl,
    title: "Updates to Guidelines",
    description:
      "We may update these community guidelines from time to time. Significant changes will be communicated through the platform. Continued use of our services constitutes acceptance of the updated guidelines. We encourage all members to review these guidelines periodically.",
    items: [],
  },
];

const CommunityGuidelinesPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-10 translate-x-48 translate-y-48" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Community{" "}
              <span className="gradient-text">Guidelines</span>
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-10">
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Last updated: February 2026
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Our community guidelines are designed to ensure a positive
                experience for everyone who uses our car rental, buy-sell, and
                servicing platform. By using our services, you agree to follow
                these guidelines and contribute to a welcoming environment.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <section.icon className="text-primary text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {section.description}
                  </p>

                  {section.items.length > 0 && (
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
      </section>
    </main>
  );
};

export default CommunityGuidelinesPage;
