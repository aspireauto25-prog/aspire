import {
  FaCalendarCheck,
  FaPhone,
  FaToolbox,
  FaUserCheck,
  FaDollarSign,
  FaCar,
} from "react-icons/fa6";
import type { Metadata } from "next";

import { CONTACT_ROUTE } from "@/constants/routes";
import {
  faqData,
  maintenanceSchedule,
  moreServicesData,
  servicePackages,
} from "@/data/servicing";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import MaintenanceSchedule from "@/components/servicing/MaintenanceSchedule";
import ServiceBlock from "@/components/servicing/ServiceBlock";
import ServicingFAQ from "@/components/servicing/FAQ";
import ServicingPackage from "@/components/servicing/Package";

import heroBg from "@/assets/images/servicing-hero-bg.jpg";

export const metadata: Metadata = {
  title: "Car Servicing",
  description:
    "Professional car servicing, oil change, brake repair, engine diagnostics and full vehicle maintenance. Book your car service today.",
  keywords: [
    "car servicing",
    "auto repair",
    "car repair workshop",
    "vehicle maintenance",
    "oil change service",
    "brake repair",
    "engine diagnostics",
    "car service near me",
  ],
  alternates: {
    canonical: "/service",
  },
};

const ServicingPage = () => {
  return (
    <>
      <Hero
        title={
          <>
            Expert Car <span className="gradient-text">Servicing</span> &amp;
            Maintenance
          </>
        }
        subtitle="Keep your vehicle in perfect condition with our certified technicians and state-of-the-art equipment."
        backgroundImage={heroBg}
        action={
          <Button href={CONTACT_ROUTE}>
            <FaCalendarCheck /> Book Service
          </Button>
        }
      />

      {/* Service Packages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive service packages designed for
              optimal vehicle performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePackages.map((pkg) => (
              <ServicingPackage
                duration={pkg.duration}
                features={pkg.features}
                key={pkg.id}
                name={pkg.name}
                popular={pkg.popular}
                price={pkg.price}
                recommendedFor={pkg.recommendedFor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Workshop?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide exceptional service with certified expertise and
              cutting-edge technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FaUserCheck className="feature-icon text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Qualified and experienced technicians
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Certified experts delivering precise diagnostics and reliable
                repairs every time.
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FaToolbox className="feature-icon text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Modern tyre and alignment equipment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced tools and technology ensuring accuracy, safety, and
                optimal performance.
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FaDollarSign className="feature-icon text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Competitive pricing with transparent advice
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fair pricing with honest recommendations — no hidden costs,
                ever.
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FaCar className="feature-icon text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Suitable for passenger vehicles, SUVs, 4WDs, and fleet vehicles
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive servicing solutions tailored for private,
                commercial, and fleet needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of services to keep your vehicle
              running smoothly and efficiently.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {moreServicesData.map((service) => (
              <ServiceBlock key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-primary to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our service team is available for any assistance and repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0497790788"
              className="px-10 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-primary transition-colors flex items-center"
            >
              <FaPhone className="mr-3" /> Call Now: 0497790788
            </a>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recommended Maintenance Schedule
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow our maintenance guide to keep your vehicle running smoothly
              and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceSchedule.map((item, index) => (
              <MaintenanceSchedule key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Servicing FAQs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Common questions about our car servicing and maintenance
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <ServicingFAQ key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicingPage;
