import { contactInfo, socialLinks } from "@/data/contact";
import ContactForm from "@/components/contact/Form";
import Hero from "@/components/Hero";
import InfoCard from "@/components/contact/InfoCard";
import SocialLink from "@/components/contact/SocialLink";

import heroBg from "@/assets/images/contact-hero-bg.jpg";

const ContactPage = () => {
  return (
    <>
      {/* Hero Image */}
      <Hero
        title={
          <>
            Get In <span className="gradient-text">Touch</span> With Us
          </>
        }
        subtitle="We're here to help with all your car rental and servicing needs. Reach out anytime!"
        backgroundImage={heroBg}
      />

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <InfoCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="pt-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <ContactForm />

              {/* Confirmation Message */}
              <div
                id="confirmation"
                className="hidden mt-6 bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                    <i className="fas fa-check text-green-600 dark:text-green-300 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We&apos;ll get back to you within 1-2 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map & Locations */}
            <div className="slide-in-right">
              <h2 className="text-3xl font-bold mb-6">Our Locations</h2>
              {/* Interactive Map */}
              <div className="map-container rounded-2xl overflow-hidden shadow-2xl mb-8 relative">
                <div id="map-container" className="absolute inset-0" />
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <h4 className="font-bold mb-2">
                    Click on markers for details
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    3 locations across the city
                  </p>
                </div>
              </div>
              {/* Locations List */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-building text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Main Office</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        123 Auto Street, Downtown, Car City, CC 10101
                      </p>
                      <p className="text-primary font-medium">0497790788</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-plane text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Airport Branch</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Airport Terminal A, Gate 3, Car City International
                        Airport
                      </p>
                      <p className="text-primary font-medium">
                        +1 (555) 123-4568
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-store text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Northside Branch
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        456 North Avenue, Northside District, Car City
                      </p>
                      <p className="text-primary font-medium">
                        +1 (555) 123-4569
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Follow us on social media for updates, offers, and car care tips
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((item, index) => (
              <SocialLink key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
