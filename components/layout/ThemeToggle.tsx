'use client';

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const isDark = resolvedTheme === "dark";

    useEffect(() => {
        setMounted(true);
    }, [])
  if (!mounted) return null;

  return (
    <div className="inline-flex items-center border border-bdr rounded-full mr-4 z-50">
      <button
        className={`box-content px-3 py-2 rounded-full cursor-pointer ${resolvedTheme === "light" ? "bg-secondary" : ""} `}
        onClick={() => isDark && setTheme("light")}
      >
        <MdLightMode />
      </button>
      <button
        className={`box-content px-3 py-2 rounded-full cursor-pointer ${resolvedTheme === "dark" ? "bg-secondary" : ""}`}
        onClick={() => isDark === false && setTheme("dark")}
      >
        <MdDarkMode />
      </button>
    </div>
  );
};

export default ThemeToggle;
