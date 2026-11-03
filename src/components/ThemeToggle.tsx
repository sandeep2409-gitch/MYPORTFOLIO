"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-8 h-8 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-muted hover:text-ink transition-all flex items-center justify-center backdrop-blur-md shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] focus:outline-none focus-visible:ring-1 focus-visible:ring-accent active:scale-95"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-accent transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-accent transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
