import {
  FaBullseye,
  FaCheck,
  FaEye,
  FaHandshake,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";
import type { Metadata } from "next";

import { CONTACT_ROUTE } from "@/constants/routes";
import Button from "@/components/Button";

import heroBg from "@/assets/images/buy-sell-bg.jpg";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about our car rental, vehicle sales and professional car servicing company. Trusted by hundreds of customers for quality service and transparent pricing.",
  keywords: [
    "about car rental company",
    "car dealership about us",
    "auto service center team",
    "vehicle rental company",
    "trusted car company",
  ],
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 mb-6">
                <span className="text-primary font-bold">OUR STORY</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                From Humble Beginnings to Industry Leader
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Intro-Aspire Automotive is an Australian-owned car dealership
                and rental business committed to delivering reliable vehicles,
                transparent service, and real value to our customers. We
                specialise in fuel-efficient hybrid vehicles, offering practical
                solutions for everyday drivers, ride-share operators, and
                business customers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                With a strong focus on quality and compliance, every vehicle we
                sell or rent is carefully selected, professionally inspected,
                and maintained to high standards. Our experience in both vehicle
                sales and rentals allows us to understand the full lifecycle of
                a car — from purchase and maintenance to long-term reliability
                and operating costs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We believe in honest pricing, clear communication, and long-term
                relationships. Whether you are renting a vehicle or purchasing
                one, our goal is to make the process simple, fair, and
                stress-free.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                At Aspire Automotive, we are driven by excellence and dedicated
                to helping our customers drive with confidence.
              </p>
              <Button href={CONTACT_ROUTE} className="md:w-max">
                <FaPhone /> Contact Our Team
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroBg}
                    alt="Aspire Automotive"
                    className="w-full h-full object-cover"
                    height={800}
                    width={1200}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">10+</div>
                    <div className="font-bold">Premium Vehicles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      {/* <section className="py-16 bg-linear-to-r from-primary to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center stat-card p-6">
              <div className="text-5xl font-bold mb-2 counter">10+</div>
              <div className="text-xl">Premium Vehicles</div>
            </div>
            <div className="text-center stat-card p-6">
              <div className="text-5xl font-bold mb-2 counter">24/7</div>
              <div className="text-xl">Road side Assistance</div>
            </div>
            <div className="text-center stat-card p-6">
              <div className="text-5xl font-bold mb-2 counter">100+</div>
              <div className="text-xl">Happy Customers</div>
            </div>
            <div className="text-center stat-card p-6">
              <div className="text-5xl font-bold mb-2 counter">98%</div>
              <div className="text-xl">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Mission & Values */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Our Mission &amp; Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Guiding principles that drive everything we do at Aspire Automotive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mission-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slide-up delay-100">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <FaBullseye className="text-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To revolutionize car rental experiences by providing premium
                vehicles, exceptional service, and innovative solutions that
                empower people to travel with confidence and style.
              </p>
            </div>
            <div className="mission-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slide-up delay-200">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <FaEye className="text-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become the world&apos;s most trusted mobility partner,
                recognized for our commitment to sustainability, technological
                innovation, and unparalleled customer experiences.
              </p>
            </div>
            <div className="mission-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slide-up delay-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <FaHandshake className="text-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <FaCheck className="text-primary mr-3" /> Customer Excellence
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-primary mr-3" /> Innovation &amp;
                  Technology
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-primary mr-3" /> Environmental
                  Responsibility
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-primary mr-3" /> Team Collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
