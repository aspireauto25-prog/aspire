import {
  BUY_SELL_ROUTE,
  CARS_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  SERVICING_ROUTE,
} from "./routes";

const navlinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: CARS_ROUTE,
    label: "Our Fleet",
  },
  {
    route: BUY_SELL_ROUTE,
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
