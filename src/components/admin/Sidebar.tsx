import { FaBars } from "react-icons/fa";
import { useState } from "react";

import Logo from "../Logo";
import SidebarMenu from "./SidebarMenu";
import Logout from "./Logout";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <aside
        className={`${showSidebar ? "flex" : "hidden"} absolute h-full md:relative md:flex flex-col w-64 bg-white dark:bg-gray-950 shadow-lg z-40`}
        onClick={() => setShowSidebar(false)}
      >
        <div className="py-4 px-6  border-gray-200 dark:border-gray-700">
          <Logo />
        </div>
        <SidebarMenu />
        {/* Logout Button */}
        <div className="p-4 border-t  border-gray-200 dark:border-gray-700">
          <Logout />
        </div>
      </aside>
      {showSidebar && (
        <div
          className="block md:hidden w-full h-screen bg-black/10 dark:bg-black/40 absolute z-30 top-0 left-0"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
      <div className="md:hidden fixed top-4 left-4 z-30 flex items-center gap-5">
        <button
          className="p-3 rounded-lg bg-primary text-white shadow-lg"
          onClick={() => setShowSidebar(true)}
        >
          <FaBars />
        </button>
        <Logo />
      </div>
    </>
  );
};

export default Sidebar;
