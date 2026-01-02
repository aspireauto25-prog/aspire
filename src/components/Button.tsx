import { getStylesBySize, getStylesByTheme } from "@/helpers/buttonStyles";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  rounded?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "primary" | "light" | "dark";
  type?: "submit" | "reset" | "button";
}

const Button = ({
  children,
  className = "",
  onClick,
  rounded = false,
  size = "lg",
  theme = "primary",
  type = "button",
}: Props) => {
  let btnClass =
    "flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 cursor-pointer ";

  btnClass += getStylesBySize(size, rounded);
  btnClass += getStylesByTheme(theme);
  btnClass += className;

  return (
    <button onClick={onClick} type={type} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
