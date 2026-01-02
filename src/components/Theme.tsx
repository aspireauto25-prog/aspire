import { FaMoon, FaSun } from "react-icons/fa6";

import { toggleTheme } from "@/utils/theme";

const Theme = () => {
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer"
    >
      <FaMoon className="block dark:hidden" />
      <FaSun className="dark:block hidden" />
    </button>
  );
};

export default Theme;
