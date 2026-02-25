import {
  FaCarAlt,
  FaComments,
  FaDollarSign,
  FaInbox,
  FaKey,
  FaTachometerAlt,
  FaTag,
  FaUserCog,
} from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";

import {
  ADMIN_CARS_LIST_ROUTE,
  ADMIN_CAR_RENT_ROUTE,
  ADMIN_CAR_SELL_ROUTE,
  CONTACT_INQUIRIES_ROUTE,
  DASHBOARD_ROUTE,
  LEGAL_DOCUMENTS_ROUTE,
  PROFILE_ROUTE,
  REVIEW_INQUIRIES_ROUTE,
  SELL_INQUIRIES_ROUTE,
} from "./routes";

export const dashboardMenu = [
  {
    Icon: FaTachometerAlt,
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
  },
];

export const inventoryMenu = [
  {
    Icon: FaCarAlt,
    route: ADMIN_CARS_LIST_ROUTE,
    label: "All Cars",
  },
  {
    Icon: FaKey,
    route: ADMIN_CAR_RENT_ROUTE,
    label: "Cars for Rent",
  },
  {
    Icon: FaTag,
    route: ADMIN_CAR_SELL_ROUTE,
    label: "Cars for Sale",
  },
];

export const inquiryMenu = [
  {
    Icon: FaInbox,
    route: CONTACT_INQUIRIES_ROUTE,
    label: "Contact Inquiries",
  },
  {
    Icon: FaDollarSign,
    route: SELL_INQUIRIES_ROUTE,
    label: "Sell Inquiries",
  },
  {
    Icon: FaComments,
    route: REVIEW_INQUIRIES_ROUTE,
    label: "Review Inquiries",
  },
];

export const settingsMenu = [
  {
    Icon: FaRegFileLines,
    route: LEGAL_DOCUMENTS_ROUTE,
    label: "Legal Documents",
  },
  {
    Icon: FaUserCog,
    route: PROFILE_ROUTE,
    label: "Profile",
  },
];
