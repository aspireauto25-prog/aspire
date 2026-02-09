import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

import {
  getOutlinedStylesByTheme,
  getStylesBySize,
} from "@/helpers/buttonStyles";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  rounded?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "primary" | "light" | "dark";
  type?: "submit" | "reset" | "button";
}

const OutlinedButton = ({
  children,
  className = "",
  href,
  onClick,
  rounded = false,
  size = "lg",
  theme = "primary",
  type = "button",
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  let btnClass =
    "flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 border-2 ";

  btnClass += getStylesBySize(size, rounded);
  btnClass += getOutlinedStylesByTheme(theme);
  btnClass += props?.disabled
    ? "opacity-70 cursor-not-allowed "
    : "cursor-pointer ";
  btnClass += className;

  if (href)
    return (
      <Link href={href} className={btnClass}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} type={type} className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default OutlinedButton;
