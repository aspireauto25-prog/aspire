"use client";

import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  customerMenu,
  dashboardMenu,
  inventoryMenu,
  settingsMenu,
} from "@/constants/adminMenu";
import { FaMoon } from "react-icons/fa";

interface MenuItemProps {
  Icon: IconType;
  label: string;
  route: string;
}

const SidebarMenuItem = ({ Icon, label, route }: MenuItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === route;

  return (
    <li>
      <Link
        href={route}
        className={`sidebar-link flex items-center gap-3 px-3 py-3 rounded-lg mb-1 ${
          isActive
            ? "active"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
        } `}
      >
        <Icon
          className={
            isActive ? "text-primary" : "text-gray-500 dark:text-gray-400"
          }
        />
        <span>{label}</span>
      </Link>
    </li>
  );
};

const SidebarMenu = () => {
  return (
    <nav className="flex-1 p-4 overflow-y-auto">
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Dashboard
        </p>
        <ul>
          {dashboardMenu.map((menu, index) => (
            <SidebarMenuItem key={index} {...menu} />
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Inventory
        </p>
        <ul>
          {inventoryMenu.map((menu, index) => (
            <SidebarMenuItem key={index} {...menu} />
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Customer Management
        </p>
        <ul>
          {customerMenu.map((menu, index) => (
            <SidebarMenuItem key={index} {...menu} />
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Settings
        </p>
        <ul>
          {settingsMenu.map((menu, index) => (
            <SidebarMenuItem key={index} {...menu} />
          ))}
          <li>
            <div className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700">
              <FaMoon className="mr-3 text-gray-500 dark:text-gray-400" />
              <span className="flex-1">Dark Mode</span>
              <button className="flex w-10 h-5 rounded-full bg-gray-300 dark:bg-dark-600 relative">
                <div className="toggle-circle absolute w-4 h-4 rounded-full bg-white top-0.5 left-0.5 transition-transform duration-300" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
