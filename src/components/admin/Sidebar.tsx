import { FaBars, FaSignOutAlt } from "react-icons/fa";

import Button from "../Button";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-gray-800 shadow-lg z-20">
      <SidebarMenu />
      {/* Logout Button */}
      <div className="p-4 border-t  border-gray-200 dark:border-gray-700">
        <Button size="md" className="w-full">
          <FaSignOutAlt />
          <span>Log Out</span>
        </Button>
      </div>
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button className="p-2 rounded-lg bg-primary text-white shadow-lg">
          <FaBars />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
