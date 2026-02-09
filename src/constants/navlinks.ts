import {
  BUY_CAR_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  RENT_LIST_ROUTE,
  SERVICING_ROUTE,
} from "./routes";

const navlinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: RENT_LIST_ROUTE,
    label: "Our Fleet",
  },
  {
    route: BUY_CAR_ROUTE,
    label: "Buy & Sell",
  },
  {
    route: SERVICING_ROUTE,
    label: "Servicing",
  },
  {
    route: CONTACT_ROUTE,
    label: "Contact",
  },
];

export default navlinks;
