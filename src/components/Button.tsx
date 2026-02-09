import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

import { getStylesBySize, getStylesByTheme } from "@/helpers/buttonStyles";

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

const Button = ({
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
    "flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 ";

  btnClass += getStylesBySize(size, rounded);
  btnClass += getStylesByTheme(theme);
  btnClass += props?.disabled
    ? "opacity-70 cursor-not-allowed "
    : "cursor-pointer ";
  btnClass += className;

  if (href && !props?.disabled) {
    return (
      <Link href={href} className={btnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
