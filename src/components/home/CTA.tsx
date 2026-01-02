import { FaCalendarAlt } from "react-icons/fa";

import { CONTACT_ROUTE } from "@/constants/routes";
import LinkButton from "../LinkButton";

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
        <div className="text-center">
          <LinkButton
            href={CONTACT_ROUTE}
            rounded
            theme="light"
            className="hover:scale-105 mx-auto w-max"
          >
            <FaCalendarAlt /> Book Your Ride Now
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default CTA;
