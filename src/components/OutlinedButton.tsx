import {
  getOutlinedStylesByTheme,
  getStylesBySize,
} from "@/helpers/buttonStyles";
import { ButtonHTMLAttributes } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  rounded?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "primary" | "light" | "dark";
  type?: "submit" | "reset" | "button";
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const OutlinedButton = ({
  children,
  className = "",
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

  return (
    <button onClick={onClick} type={type} className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default OutlinedButton;
