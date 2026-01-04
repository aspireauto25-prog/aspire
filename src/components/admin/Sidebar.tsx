import { FaSignOutAlt } from "react-icons/fa";

import Button from "../Button";
import Logo from "../Logo";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-dark-800 shadow-lg z-20">
        {/* Logo Section */}
        <div className="py-4 px-6 border-b border-gray-200 dark:border-dark-700 flex justify-center">
          <Logo />
        </div>

        <SidebarMenu />
        {/* Logout Button */}
        <div className="p-4 border-t  border-gray-200 dark:border-dark-700">
          <Button size="md" className="w-full">
            <FaSignOutAlt />
            <span>Log Out</span>
          </Button>
        </div>
      </aside>
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          id="mobileSidebarToggle"
          className="p-2 rounded-lg bg-primary text-white shadow-lg"
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
