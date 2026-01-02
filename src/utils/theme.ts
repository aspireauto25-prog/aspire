const THEME_KEY = "aspire-theme";

export function toggleTheme() {
  const html = document.documentElement;

  const isDark = html.classList.toggle("dark");

  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}
