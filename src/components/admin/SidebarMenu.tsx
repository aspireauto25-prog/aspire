import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  customerMenu,
  dashboardMenu,
  inventoryMenu,
  settingsMenu,
} from "@/constants/adminMenu";

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
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
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
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
