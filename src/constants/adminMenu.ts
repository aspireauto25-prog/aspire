import {
  FaCarAlt,
  FaChartLine,
  FaCog,
  FaInbox,
  FaTachometerAlt,
  FaTag,
  FaUserCog,
  FaUsers,
  FaWrench,
} from "react-icons/fa";

import {
  ADMIN_CARS_ROUTE,
  ADMIN_RENT_ROUTE,
  ADMIN_SELL_ROUTE,
  CONTACT_INQUIRIES_ROUTE,
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
} from "./routes";

export const dashboardMenu = [
  {
    Icon: FaTachometerAlt,
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
  },
  {
    Icon: FaChartLine,
    route: "/admin",
    label: "Analytics",
  },
];

export const inventoryMenu = [
  {
    Icon: FaCarAlt,
    route: ADMIN_CARS_ROUTE,
    label: "All Cars",
  },
  {
    Icon: FaCarAlt,
    route: ADMIN_RENT_ROUTE,
    label: "Cars for Rent",
  },
  {
    Icon: FaTag,
    route: ADMIN_SELL_ROUTE,
    label: "Cars for Sale",
  },
  {
    Icon: FaWrench,
    route: "/admin",
    label: "Service requests",
  },
];

export const customerMenu = [
  {
    Icon: FaInbox,
    route: CONTACT_INQUIRIES_ROUTE,
    label: "Contact Inquiries",
  },
  {
    Icon: FaUsers,
    route: "/admin",
    label: "Customers",
  },
];

export const settingsMenu = [
  {
    Icon: FaCog,
    route: SETTINGS_ROUTE,
    label: "General Settings",
  },
  {
    Icon: FaUserCog,
    route: PROFILE_ROUTE,
    label: "Profile",
  },
];
