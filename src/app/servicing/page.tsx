import {
  FaBolt,
  FaCalendarCheck,
  FaShield,
  FaToolbox,
  FaUserCheck,
} from "react-icons/fa6";

import Hero from "@/components/Hero";
import LinkButton from "@/components/LinkButton";

import heroBg from "@/assets/images/servicing-hero-bg.avif";

const ServicingPage = () => {
  return (
    <>
      <div>
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
            <LinkButton href="#booking-form">
              <FaCalendarCheck /> Book Service
            </LinkButton>
          }
        />

        {/* Service Packages */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Service Packages
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive service packages designed for
                optimal vehicle performance.
              </p>
            </div>
            <div
              id="service-packages"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            />
          </div>
        </section>
        {/* Features */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
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
                <h3 className="text-xl font-bold mb-4">
                  Certified Technicians
                </h3>
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
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Recommended Maintenance Schedule
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Follow our maintenance guide to keep your vehicle running
                smoothly and efficiently.
              </p>
            </div>
            <div
              id="maintenance-schedule"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            />
          </div>
        </section>
        {/* Booking Form */}
        <section
          id="booking-form"
          className="py-16 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl animate-slide-up">
                <h2 className="text-3xl font-bold mb-6">
                  Book Your Service Appointment
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and we&apos;ll confirm your
                  appointment within 1 business hour.
                </p>
                <form id="service-booking-form" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="car-model"
                        className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Car Model *
                      </label>
                      <input
                        type="text"
                        id="car-model"
                        name="car-model"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="service-type"
                        className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Service Type *
                      </label>
                      <select
                        id="service-type"
                        name="service-type"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option>Select service</option>
                        <option value="Basic Service">Basic Service</option>
                        <option value="Premium Service">Premium Service</option>
                        <option value="Full Service">Full Service</option>
                        <option value="Oil Change">Oil Change</option>
                        <option value="Brake Service">Brake Service</option>
                        <option value="Tire Service">Tire Service</option>
                        <option value="Diagnostics">
                          Computer Diagnostics
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="service-date"
                        className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="service-date"
                        name="service-date"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service-time"
                        className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                      >
                        Preferred Time *
                      </label>
                      <select
                        id="service-time"
                        name="service-time"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option>Select time</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="estimated-price"
                      className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                    >
                      Estimated Price
                    </label>
                    <input
                      type="text"
                      id="estimated-price"
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-100 dark:bg-gray-900"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="special-requests"
                      className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                    >
                      Special Requests
                    </label>
                    <textarea
                      id="special-requests"
                      name="special-requests"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    id="service-submit-btn"
                    className="btn-primary w-full py-4 rounded-xl font-bold text-lg"
                  >
                    <i className="fas fa-paper-plane mr-3" /> Book Service
                    Appointment
                  </button>
                </form>
                {/* Confirmation */}
                <div id="booking-confirmation" className="hidden mt-6" />
              </div>
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
              Our emergency service team is available 24/7 for roadside
              assistance and urgent repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                <i className="fas fa-exclamation-triangle mr-3" /> Emergency
                Service
              </button>
              <a
                href="tel:0497790788"
                className="px-10 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-primary transition-colors"
              >
                <i className="fas fa-phone mr-3" /> Call Now: 0497790788
              </a>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Servicing FAQs
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Common questions about our car servicing and maintenance
              </p>
            </div>
            <div id="faq-container" className="max-w-3xl mx-auto space-y-6" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicingPage;
