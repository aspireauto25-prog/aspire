import Image from "next/image";
import Link from "next/link";

import { HOME_ROUTE } from "@/constants/routes";
import config from "@/config";
import logo from "@/assets/images/logo.png";
import logoLight from "@/assets/images/logo-light.png";

const Logo = () => {
  return (
    <>
      <Link
        href={HOME_ROUTE}
        className="dark:hidden flex items-center space-x-3"
      >
        <Image src={logo} alt={config.appName} className="h-12 w-auto" />
      </Link>
      <Link
        href={HOME_ROUTE}
        className="hidden dark:flex items-center space-x-3"
      >
        <Image src={logoLight} alt={config.appName} className="h-12 w-auto" />
      </Link>
    </>
  );
};

export default Logo;
