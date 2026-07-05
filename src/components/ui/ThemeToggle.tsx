"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="group absolute top-8 left-1/2 -translate-x-1/2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center text-[var(--text-primary)]"
    >
      {isDark ? (
        <MoonIcon />
      ) : (
        <SunIcon className="transition-transform duration-500 ease-out group-hover:rotate-90" />
      )}
    </button>
  );
}
