"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Sun, Moon } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const sections = [
  "home",
  "about",
  "services",
  "work",
  "resume",
  "blog",
  "contact",
];

// Define props interface
interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const [theme, setTheme] = useState<string>("light");

  // Handle smooth scrolling
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
      setIsOpen(false);
    }
  };

  // Apply stored theme when the component mounts
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme") || "light";
  //   setTheme(storedTheme);
  //   if (storedTheme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600 dark:text-white">
        MyPortfolio
      </h1>

      {/* Desktop Navbar */}
      <div className="hidden md:flex space-x-6">
        {sections.map((section) => (
          <button
            type="button"
            key={section}
            onClick={() => handleScroll(section)}
            className={`text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-4 py-2 transition-all ${
              activeSection === section
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 font-semibold"
                : ""
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* <DarkModeToggle /> */}
        <DarkModeToggle />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center space-y-4 py-6 md:hidden"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-4 py-2 transition-all ${
                  activeSection === section
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 font-semibold"
                    : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
