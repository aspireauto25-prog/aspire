import Link from "next/link";

import { HOME_ROUTE, RENT_ROUTE } from "@/constants/routes";

interface Props {
  car: string;
}

const RentDetailsBreadCrumb = ({ car }: Props) => {
  return (
    <div className="container mx-auto px-6 py-4 text-sm text-gray-600 dark:text-gray-400 no-print">
      <Link href={HOME_ROUTE} className="hover:text-primary transition-colors">
        Home
      </Link>
      /
      <Link href={RENT_ROUTE} className="hover:text-primary transition-colors">
        Our Fleet
      </Link>
      /<span className="text-primary">{car}</span>
    </div>
  );
};

export default RentDetailsBreadCrumb;
