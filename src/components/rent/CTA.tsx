import { FaPhone } from "react-icons/fa";
import Link from "next/link";

import { CONTACT_ROUTE } from "@/constants/routes";

const RentCTA = () => {
  return (
    <section className="py-16 bg-linear-to-r from-primary to-red-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          {"Can't Find What You're Looking For?"}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact our team for special requests, custom packages, or corporate
          rates.
        </p>
        <Link
          href={CONTACT_ROUTE}
          className="inline-flex items-center btn-primary px-10 py-4 rounded-full font-bold text-lg"
        >
          <FaPhone className="mr-3" /> Contact Our Team
        </Link>
      </div>
    </section>
  );
};

export default RentCTA;
