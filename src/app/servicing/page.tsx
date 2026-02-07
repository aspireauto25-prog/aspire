import {
  FaBolt,
  FaCalendarCheck,
  FaPhone,
  FaShield,
  FaToolbox,
  FaUserCheck,
} from "react-icons/fa6";

import { CONTACT_ROUTE } from "@/constants/routes";
import {
  faqData,
  maintenanceSchedule,
  servicePackages,
} from "@/data/servicing";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import MaintenanceSchedule from "@/components/servicing/MaintenanceSchedule";
import ServicingFAQ from "@/components/servicing/FAQ";
import ServicingPackage from "@/components/servicing/Package";

import heroBg from "@/assets/images/servicing-hero-bg.jpg";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              Why Choose Our Servicing?
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
              <h3 className="text-xl font-bold mb-4">Certified Technicians</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Factory-trained experts with 10+ years experience
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FaToolbox className="feature-icon text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Equipment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Latest diagnostic tools and technology
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FaShield className="feature-icon text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Warranty Protected</h3>
              <p className="text-gray-600 dark:text-gray-300">
                12-month service warranty on all work
              </p>
            </div>
            <div className="feature-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <FaBolt className="feature-icon text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quick Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Most services completed same day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16">
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
