"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "@icon/MoonStars.svg";
import SunIcon from "@icon/Sun.svg";

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-500 dark:bg-[#8a3d99] hover:scale-110 transition-transform duration-300"
      aria-label="Alternar Tema"
    >
      {currentTheme === "dark" ? (
        <SunIcon className="text-yellow-400 w-6 h-6" />
      ) : (
        <MoonIcon className="text-gray-800 w-6 h-6" />
      )}
    </button>
  );
}
