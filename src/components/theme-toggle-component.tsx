"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SunIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* White sun with black outline */}
    <circle cx="25" cy="25" r="23" fill="white" stroke="black" strokeWidth="2" />
  </svg>
);


const MoonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Black moon with white outline */}
    <path
      d="M0 50C13.8071 50 25 38.8071 25 25C25 11.1929 13.8071 0 0 0V50Z"
      fill="black"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "dark" : "light")}
      className="hover:underline cursor-pointer"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
