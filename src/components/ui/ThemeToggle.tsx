"use client";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-lg border border-[var(--mb-border)] px-3 py-2 bg-[var(--mb-surface)] text-[var(--mb-text)] hover:border-[color-mix(in_oklab,var(--mb-primary)_40%,transparent)] transition"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span className="text-xs">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}





