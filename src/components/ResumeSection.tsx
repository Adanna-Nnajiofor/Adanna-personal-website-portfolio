"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import Link from "next/link";
import { useState } from "react";

const techSkills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
];

const archiSkills = ["AutoCAD", "ArchiCAD", "Revit", "Lumion"];

const education = [
  {
    school: "University of Nigeria Enugu Campus",
    degree: "PhD in Architecture",
    duration: "2024 - Present",
  },
  {
    school: "Geneysis Learnable",
    degree: "Backend Engineering",
    duration: "2024 - 2025",
  },
  { school: "3MTT Nigeria", degree: "Software Development", duration: "2024" },
  {
    school: "AltSchool Africa",
    degree: "Frontend Engineering",
    duration: "2023 - 2024",
  },
  {
    school: "University of Nigeria Enugu Campus",
    degree: "MSc in Architecture",
    duration: "2020 - 2023",
  },
  {
    school: "Enugu State University of Science & Technology",
    degree: "B.Sc. (Hons) Architecture",
    duration: "2012 - 2017",
  },
];

const experience = [
  {
    title: "Architect - Dunon Synergy Projects LTD",
    duration: "2024 - Present",
    description:
      "Leading architectural design projects and supervising construction.",
  },
  {
    title: "Frontend Developer Intern - HNG Internship",
    duration: "2024",
    description: "Building scalable web applications using React and Next.js.",
  },
  {
    title: "Architect - Pointline Konsult",
    duration: "2019 - 2024",
    description: "Designed commercial and residential structures.",
  },
  {
    title: "Graduate Architect - Abua-Odual Local Government Council",
    duration: "2018 - 2019",
    description: "Contributed to government infrastructure projects.",
  },
  {
    title: "Architectural Intern - A-Visuals and Associates",
    duration: "2015 - 2016",
    description: "Developed concept designs and assisted in 3D modeling.",
  },
];

const ResumeSection = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => setShowAll(!showAll);

  const handleDownload = (filePath: string, fileName: string) => {
    fetch(filePath)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#1e293b] to-[#0f172a] text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-[0_10px_50px_rgba(0,0,0,0.3)]"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Adanna Nnajiofor
          </h1>
          <p className="text-lg text-gray-300 mt-3">
            Frontend Developer & Architect
          </p>

          {/* Resume & Portfolio Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {[
              {
                file: "/assets/resume.pdf",
                name: "Adanna_Nnajiofor_Resume.pdf",
                label: "Download Resume",
              },
              {
                file: "/assets/portfolio.pdf",
                name: "Adanna_Nnajiofor_Portfolio.pdf",
                label: "Download Portfolio",
              },
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleDownload(item.file, item.name)}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-3 rounded-full font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaDownload /> {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Tech Skills */}
          <div className="text-center">
            <motion.h2 className="text-2xl font-semibold mb-6">
              💻 Tech Skills
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
              {techSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm p-4 rounded-2xl w-full shadow-md flex flex-col items-center"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-200">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Architectural Tools */}
          <div className="text-center">
            <motion.h2 className="text-2xl font-semibold mb-6">
              🏗️ Architectural Skills
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {archiSkills.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    boxShadow: "0px 0px 15px rgba(94, 234, 212, 0.8)",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white/10 border border-white/20 py-3 px-4 rounded-xl text-gray-300 font-medium shadow-sm text-center cursor-pointer hover:text-teal-300"
                >
                  {tool}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            <span className="text-2xl">💼</span> Experience
          </h2>
          <div className="space-y-6">
            {(showAll ? experience : experience.slice(0, 3)).map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/10 border border-white/20 p-5 rounded-2xl shadow-md"
              >
                <h3 className="text-white font-semibold text-lg">
                  {exp.title}
                </h3>
                <p className="text-gray-400 italic text-sm">{exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
          {experience.length > 3 && (
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={toggleShow}
                className="text-sm text-teal-300 hover:underline"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            <span className="text-2xl">🎓</span> Education
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ x: idx % 2 === 0 ? -120 : 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/10 border border-white/20 p-5 rounded-2xl shadow-md"
              >
                <h3 className="text-white font-semibold">{edu.school}</h3>
                <p className="text-gray-400 italic text-sm">{edu.degree}</p>
                <p className="text-gray-300 text-sm">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.p
            className="text-lg font-semibold text-gray-300 italic mb-4"
            animate={{ x: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            Looking for a frontend developer or an architect? Let’s work
            together!
          </motion.p>
          <Link href="/hire-me">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-blue-500 text-white font-medium rounded-full shadow-xl"
            >
              ✨ Hire Me
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
