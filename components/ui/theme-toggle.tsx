import { useTheme } from "next-themes";
import { Button } from "../button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      className="w-12 h-12"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀" : "🌙"}
    </Button>
  );
}
