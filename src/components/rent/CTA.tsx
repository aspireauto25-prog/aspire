import { FaPhone } from "react-icons/fa";

import { CONTACT_ROUTE } from "@/constants/routes";
import LinkButton from "../LinkButton";

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
        <LinkButton
          href={CONTACT_ROUTE}
          theme="light"
          rounded
          className="mx-auto w-max text-primary hover:scale-105"
        >
          <FaPhone /> Contact Our Team
        </LinkButton>
      </div>
    </section>
  );
};

export default RentCTA;
