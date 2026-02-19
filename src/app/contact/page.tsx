import { FaBolt, FaClock, FaWhatsapp } from "react-icons/fa";
import { SearchParams } from "next/dist/server/request/search-params";
import type { Metadata } from "next";

import { contactInfo, socialLinks } from "@/data/contact";
import { WHATSAPP_URL } from "@/constants/contact";
import Button from "@/components/Button";
import ContactFAQ from "@/components/contact/FAQ";
import ContactForm from "@/components/contact/Form";
import Hero from "@/components/Hero";
import heroBg from "@/assets/images/contact-hero-bg.jpg";
import InfoCard from "@/components/contact/InfoCard";
import SocialLink from "@/components/contact/SocialLink";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us for car rentals, car purchase inquiries or servicing appointments.",
  alternates: {
    canonical: "/contact",
  },
};

interface Props {
  searchParams: Promise<SearchParams>;
}

const ContactPage = async ({ searchParams }: Props) => {
  const query = await searchParams;

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
              <ContactForm
                subject={query?.subject as string}
                message={query.message as string}
              />
            </div>
            {/* Map & Locations */}
            <div className="slide-in-right">
              <div className="space-y-8">
                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg contact-card">
                    <div className="contact-feature-icon">
                      <FaClock className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        Wednesday: 8:00 AM - 9:00 PM
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        Saturday: 8:00 AM - 1:00 PM
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg contact-card">
                    <div className="contact-feature-icon">
                      <FaBolt className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Response Time</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Email: Within 2 hours
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Phone: Immediate
                    </p>
                  </div>
                </div>
                {/* Interactive FAQ Section */}
                <ContactFAQ />
                {/* Live Chat Widget */}
                <div className="bg-linear-to-r from-primary to-red-600 rounded-xl p-6 text-white shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">WhatsApp Us</h3>
                      <p className="opacity-90">
                        Get instant answers from our support team
                      </p>
                    </div>
                  </div>
                  <Button href={WHATSAPP_URL} theme="light" className="w-full">
                    Start WhatsApp Chat
                  </Button>
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
