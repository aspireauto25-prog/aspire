"use client";

import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 space-y-4">
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-primary text-white rounded-full shadow-2xl items-center justify-center hover:scale-110 transition-transform cursor-pointer ${
          visible ? "flex" : "hidden"
        }`}
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
