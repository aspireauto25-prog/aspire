import Link from "next/link";

import { getStylesBySize, getStylesByTheme } from "@/helpers/buttonStyles";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  rounded?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "primary" | "light" | "dark";
}

const LinkButton = ({
  children,
  className = "",
  href,
  rounded = false,
  size = "lg",
  theme = "primary",
}: Props) => {
  let btnClass =
    "flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 cursor-pointer ";

  btnClass += getStylesBySize(size, rounded);
  btnClass += getStylesByTheme(theme);
  btnClass += className;

  return (
    <Link href={href} className={btnClass}>
      {children}
    </Link>
  );
};

export default LinkButton;
