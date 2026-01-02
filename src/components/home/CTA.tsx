import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

import { CONTACT_ROUTE } from "@/constants/routes";

const CTA = () => {
  return (
    <section className="py-20 bg-linear-to-r from-primary to-red-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Drive Your Dream Car?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Choose from our extensive collection of premium vehicles from
          world-renowned brands.
        </p>
        <Link
          href={CONTACT_ROUTE}
          className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-3"
        >
          <FaCalendarAlt /> Book Your Ride Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
