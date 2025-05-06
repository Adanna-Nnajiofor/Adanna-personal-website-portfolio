"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    setMounted(true);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    if (!mounted) return;

    setTimeout(() => {
      const currentPath = pathname.slice(1) || "home";
      const pageBackground = document.getElementById(currentPath);

      if (!pageBackground) {
        console.warn("No background element found for:", currentPath);
        return;
      }

      const themeColors: { [key: string]: string } = {
        home:
          theme === "dark"
            ? "linear-gradient(to right, #121212, #2d3748)"
            : "linear-gradient(to right, #A3B8D4, #D1C6E0, #E4E8F1)",
        about:
          theme === "dark"
            ? "linear-gradient(to right, #1c1c1c, #2a2a2a)"
            : "linear-gradient(to right, #F0F0F0, #D3D3D3)",
        services:
          theme === "dark"
            ? "linear-gradient(to right, #2d3436, #4a5d6a)"
            : "linear-gradient(to right, #F0C8C6, #E8B9B0)",
        work:
          theme === "dark"
            ? "linear-gradient(to right, #333333, #444444)"
            : "linear-gradient(to right, #E5E5E5, #B0C4DE)",
        resume:
          theme === "dark"
            ? "linear-gradient(to right, #212121, #383838)"
            : "linear-gradient(to right, #FAFAFA, #D8F1F1)",
        contact:
          theme === "dark"
            ? "linear-gradient(to right, #2c2c2c, #424242)"
            : "linear-gradient(to right, #F5F5F5, #EAEAEA)",
        blog:
          theme === "dark"
            ? "linear-gradient(to right, #333333, #3c3c3c)"
            : "linear-gradient(to right, #F4F4F4, #F9F9F9)",
        default:
          theme === "dark"
            ? "linear-gradient(to right, #121212, #2d3748)"
            : "linear-gradient(to right, #FFFFFF, #F0F0F0)",
      };

      pageBackground.style.background =
        themeColors[currentPath] || themeColors["default"];
    }, 0);
  }, [pathname, theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <motion.button
        type="button"
        onClick={toggleTheme}
        className="p-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>
    </motion.div>
  );
};

export default DarkModeToggle;
