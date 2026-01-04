import { FaBell } from "react-icons/fa";

import Logo from "../Logo";
import Theme from "../Theme";

const AdminHeader = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex flex-row md:items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <FaBell className=" text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
            </div>

            <Theme />

            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center gap-2 rounded-lg dark:hover:bg-dark-700">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AJ</span>
                </div>
                <span className="hidden md:inline font-medium text-gray-700 dark:text-gray-300">
                  Admin
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
