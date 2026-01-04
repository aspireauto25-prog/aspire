import { IconType } from "react-icons";
import Link from "next/link";

import {
  customerMenu,
  dashboardMenu,
  inventoryMenu,
  settingsMenu,
} from "@/constants/adminMenu";

interface MenuItemProps {
  menu: {
    Icon: IconType;
    label: string;
    route: string;
  }[];
}

const SidebarMenuItem = ({ menu }: MenuItemProps) => (
  <ul>
    {menu.map(({ Icon, label, route }, index) => (
      <li key={index}>
        <Link
          href={route}
          className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 gap-3"
        >
          <Icon className="text-gray-500 dark:text-gray-400" />
          <span>{label}</span>
        </Link>
      </li>
    ))}
  </ul>
);

const SidebarMenu = () => {
  return (
    <nav className="flex-1 p-4 overflow-y-auto">
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Dashboard
        </p>
        <SidebarMenuItem menu={dashboardMenu} />
      </div>
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Inventory
        </p>
        <SidebarMenuItem menu={inventoryMenu} />
      </div>
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Customer Management
        </p>
        <SidebarMenuItem menu={customerMenu} />
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
          Settings
        </p>
        <SidebarMenuItem menu={settingsMenu} />
      </div>
    </nav>
  );
};

export default SidebarMenu;
