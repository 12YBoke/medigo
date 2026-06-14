"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    // Initialiser l'état avec le thème actuel
    if (localStorage.theme === "dark") {
      setTheme("dark");
    } else if (localStorage.theme === "light") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <span
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="p-0 cursor-pointer"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </span>
  );
};
