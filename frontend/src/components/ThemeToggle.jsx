import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
      p-3
      rounded-full
      bg-white/20
      dark:bg-gray-800
      backdrop-blur-lg
      border
      border-white/20
      transition
      hover:scale-110
      "
    >
      {theme === "dark" ? (
        <Sun size={22} />
      ) : (
        <Moon size={22} />
      )}
    </button>
  );
}