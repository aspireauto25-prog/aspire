import Link from "next/link";

import { HOME_ROUTE, BUY_CAR_ROUTE } from "@/constants/routes";

interface Props {
  car: string;
}

const SaleDetailsBreadCrumb = ({ car }: Props) => {
  return (
    <div className="container mx-auto px-6 py-4 text-sm text-gray-600 dark:text-gray-400 no-print flex gap-1">
      <Link href={HOME_ROUTE} className="hover:text-primary transition-colors">
        Home
      </Link>
      /
      <Link href={BUY_CAR_ROUTE} className="hover:text-primary transition-colors">
        Buy & Sell
      </Link>
      /<span className="text-primary">{car}</span>
    </div>
  );
};

export default SaleDetailsBreadCrumb;
