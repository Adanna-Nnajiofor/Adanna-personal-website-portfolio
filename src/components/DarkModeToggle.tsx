import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run this logic in the client
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

      setTheme(initialTheme);

      // Apply theme to the document's class
      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark"
      );
    }
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Apply theme to the document's class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Avoid rendering until the component is mounted
  if (!mounted || theme === null) return null;

  return (
    <button type="button" onClick={toggleTheme} className="p-2">
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
