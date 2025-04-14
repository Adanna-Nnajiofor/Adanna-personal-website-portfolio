"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaDraftingCompass, FaLaptopCode } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const careers = [
  "Mobile Developer",
  "Data Scientist",
  "Web Developer",
  "UI/UX Designer",
];

const socialLinks = [
  ["Twitter", "https://twitter.com/AdannaNnajiofor"],
  ["LinkedIn", "https://linkedin.com/in/AdannaNnajiofor"],
  ["GitHub", "https://github.com/Adanna-Nnajiofor"],
  ["Instagram", "https://instagram.com/Damzysparkle"],
];

const HomeSection = () => {
  const [careerIndex, setCareerIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [darkenedCircles, setDarkenedCircles] = useState(
    new Array(6).fill(false)
  );

  useEffect(() => {
    let timeout;
    const currentCareer = careers[careerIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCareerIndex((prev) => (prev + 1) % careers.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentCareer.slice(0, displayedText.length + 1));
        if (displayedText === currentCareer) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, careerIndex]);

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center transition-all duration-300 text-gray-900 py-12 px-6 overflow-hidden mt-6 lg:mt-12 bg-gradient-to-br from-blue-200 via-blue-300 to-green-400 bg-hero-pattern"
    >
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg font-medium text-gray-600 dark:text-gray-400"
        >
          Hi, I'm Adanna! Welcome to my creative space.
        </motion.p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          I am{" "}
          <span className="text-blue-500">
            <Typewriter
              words={[
                "a Frontend Developer",
                "an Architect",
                "a Creative Thinker",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Crafting immersive architectural designs and building seamless digital
          experiences.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Link
            href="#work"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:scale-105 transition-all shadow-lg"
          >
            Discover More ↓
          </Link>
        </motion.div>
      </motion.header>

      {/* Animated Circles */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end">
        {[100, 200, 300, 400, 500, 800].map((size, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setDarkenedCircles((prev) => {
                  const updatedCircles = [...prev];
                  updatedCircles[index] = true;
                  return updatedCircles;
                });
              }, 600);
            }}
            className="rounded-full" // Shape of the circles
            style={{
              width: `${size * 2}px`,
              height: `${size * 2}px`,
              borderBottom: "none",
              position: "absolute",
              right: "-10%",
              top: `calc(50% - ${size}px)`,
              border: `2px solid ${
                darkenedCircles[index] ? "#D0D0D0" : "#A0A0A0"
              }`,
              transition: "border-color 0.5s ease-in-out",
            }}
          ></motion.div>
        ))}
      </div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 flex space-y-4 mt-70 text-gray-500 text-xs tracking-widest rotate-90 origin-right uppercase"
      >
        {socialLinks.map((site, index) => (
          <a
            key={index}
            href={site[1]}
            className="ms-20 uppercase hover:text-[#C8A26B] transition-transform duration-300 transform hover:scale-110"
          >
            {site[0]}
          </a>
        ))}
      </motion.div>

      {/* Featured Projects Section */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10 p-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative group bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 backdrop-blur-lg border border-gray-200 dark:border-gray-700 transition-all"
        >
          <FaLaptopCode className="text-4xl text-blue-400 mb-4 group-hover:text-blue-300 transition-all duration-300" />
          <h3 className="text-2xl font-semibold mb-3">Frontend Development</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Building fast, accessible, and scalable web applications using
            modern frameworks.
          </p>
          <Link
            href="/tech"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            View Tech Projects →
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative group bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 backdrop-blur-lg border border-gray-200 dark:border-gray-700 transition-all"
        >
          <FaDraftingCompass className="text-4xl text-green-400 mb-4 group-hover:text-green-300 transition-all duration-300" />
          <h3 className="text-2xl font-semibold mb-3">Architectural Designs</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Designing functional, aesthetic, and sustainable spaces that blend
            innovation with elegance.
          </p>
          <Link
            href="/architecture"
            className="mt-4 inline-block text-green-500 hover:underline"
          >
            View Architectural Designs →
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeSection;
