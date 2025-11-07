/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme } from "@/redux/features/theme/themeSlice";

const ThemeToggleRound: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => (s as any).theme.theme as "light" | "dark");

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => dispatch(toggleTheme())}
      className="
        inline-flex items-center justify-center w-12 h-12 rounded-full
        bg-white/90 dark:bg-black/80 backdrop-blur-sm
        shadow-sm dark:shadow-md
        transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300
      "
      title="Toggle theme"
    >
      <span className="relative w-6 h-6">
        {/* fade animation between icons */}
        <Sun
          className={`absolute inset-0 w-6 h-6 transition-opacity duration-300 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 transition-opacity duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
        />
      </span>
    </button>
  );
};

export default ThemeToggleRound;
