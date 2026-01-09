import { FaBars } from "react-icons/fa";

import Logo from "../Logo";
import SidebarMenu from "./SidebarMenu";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 shadow-lg z-20">
        <div className="py-4 px-6  border-gray-200 dark:border-gray-700">
          <Logo />
        </div>
        <SidebarMenu />
        {/* Logout Button */}
        <div className="p-4 border-t  border-gray-200 dark:border-gray-700">
          <Logout />
        </div>
      </aside>
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button className="p-3 rounded-lg bg-primary text-white shadow-lg">
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
