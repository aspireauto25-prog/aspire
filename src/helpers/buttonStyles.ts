export function getStylesBySize(size: string, rounded: boolean) {
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
      rounded ? "rounded-full " : "rounded-xl "
    }`;

  return `py-2 px-6 text-sm ${rounded ? "rounded-full " : "rounded-lg "}`;
}

export function getStylesByTheme(theme: string) {
  if (theme == "light") return "bg-white hover:bg-gray-100 text-primary ";

  if (theme == "dark") return "bg-gray-800 hover:bg-gray-900 text-primary ";

  return "btn-primary ";
}

export function getOutlinedStylesByTheme(theme: string) {
  if (theme == "light")
    return "bg-white border-black hover:bg-gray-200 text-primary ";

  if (theme == "dark")
    return "bg-gray-800 border-white hover:bg-gray-950 text-primary ";

  return "border-primary text-primary hover:text-white hover:bg-primary ";
}
