"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDraftingCompass, FaLightbulb, FaLaptopCode } from "react-icons/fa";

const timelineItems = [
  {
    icon: <FaDraftingCompass className="text-blue-600 dark:text-blue-400" />,
    title: "Architectural Background",
    text: "Mastered design principles, spatial planning, and aesthetics.",
  },
  {
    icon: <FaLightbulb className="text-blue-600 dark:text-blue-400" />,
    title: "Discovering Tech",
    text: "Fascinated by how design translates into digital experiences.",
  },
  {
    icon: <FaLaptopCode className="text-blue-600 dark:text-blue-400" />,
    title: "Frontend Development",
    text: "Blending architecture and modern web technologies to create stunning UIs.",
  },
];

const AboutSection = () => {
  return (
    <div>
      <Head>
        <title>About | Adanna Nnajiofor</title>
        <meta
          name="description"
          content="About Adanna Nnajiofor - Architect & Frontend Developer"
        />
      </Head>

      <div
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-gray-200 dark:from-blue-900 dark:to-gray-800 text-gray-900 dark:text-white py-12 px-6 md:px-20 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          {/* Profile Image & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 mb-12 relative"
          >
            {/* Animated Blob */}
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse -z-10" />

            {/* Profile Picture */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-xl transform hover:scale-105 transition-all duration-300">
              <Image
                src="/assets/adanna-profile.jpg"
                alt="Adanna Nnajiofor"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* About Text */}
            <div className="text-center flex flex-col justify-center mt-6 md:text-left">
              <motion.h1
                className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                About Me
              </motion.h1>
              <TypeAnimation
                sequence={[
                  "Architect ✨",
                  2000,
                  "Frontend Developer 💻",
                  2000,
                  "Creative Thinker 🧠",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
                repeat={Infinity}
              />
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Hi, I’m{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Adanna Nnajiofor
                </span>
                , an
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {" "}
                  Architect
                </span>{" "}
                turned
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {" "}
                  Frontend Developer
                </span>
                . I love crafting beautiful and intuitive user experiences that
                blend aesthetics with functionality.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                My passion for design and technology drives me to build
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {" "}
                  interactive, visually compelling,
                </span>
                and accessible web applications that elevate user engagement.
              </p>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <div className="relative mt-10">
            <div className="absolute left-4 top-0 h-full border-l-4 border-blue-600 dark:border-blue-400"></div>
            <div className="pl-10 space-y-10">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className="relative flex gap-4 items-start"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design Philosophy */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              My Design Philosophy
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 italic">
              Great design is more than aesthetics. it is about functionality,
              usability, and experience. I bring an architect precision into
              frontend development, crafting intuitive and captivating designs.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/work"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
