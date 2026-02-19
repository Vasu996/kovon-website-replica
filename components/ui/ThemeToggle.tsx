"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/Icons";

type Mode = "light" | "dark";

const getPreferredMode = (): Mode => {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("kovon-mode");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle = (): JSX.Element => {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const initial = getPreferredMode();
    setMode(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleMode = (): void => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("kovon-mode", next);
  };

  return (
    <button
      aria-label="Toggle color mode"
      onClick={toggleMode}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
    >
      {mode === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
