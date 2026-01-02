interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  rounded?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "primary" | "light" | "dark";
  type?: "submit" | "reset" | "button";
}

function getStylesByTheme(theme: string) {
  if (theme == "light") return "bg-white hover:bg-gray-100 text-black ";

  if (theme == "dark") return "bg-gray-800 hover:bg-gray-900 text-white ";

  return "btn-primary ";
}

function getStylesBySize(size: string, rounded: boolean) {
  if (size == "xl")
    return `py-5 px-16 text-xl font-bold ${
      rounded ? "rounded-full " : "rounded-xl "
    }`;

  if (size == "lg")
    return `py-4 px-12 text-lg font-bold ${
      rounded ? "rounded-full " : "rounded-xl "
    }`;

  if (size == "md")
    return `py-3 px-8 text-md font-bold ${
      rounded ? "rounded-full " : "rounded-lg "
    }`;

  return `py-2 px-6 text-sm ${rounded ? "rounded-full " : "rounded-lg "}`;
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
