"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "../../components/TechProjectCard";
import TechProjectList from "../../components/TechProjectList";
import "../../app/flip.css";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  image: string;
  link: string;
  github: string;
}

const TechPage = () => {
  const [projects, setTechProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Open Source",
    "Full-Stack Development",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-green-500 text-gray-100 py-12 px-6 md:px-12">
      {/* Firebase Fetch Component */}
      <TechProjectList
        setTechProjects={setTechProjects}
        setLoading={setLoading}
      />

      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-white">Tech Projects</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          A collection of my work in frontend development, UI/UX design, and
          full-stack applications. Explore and discover what I have built!
        </p>

        {/* Back Button */}
        <Link href="/" passHref>
          <button
            type="button"
            className="mb-4 px-6 py-2 bg-white text-blue-700 border border-blue-700 rounded-full hover:bg-blue-100 transition-all ease-in-out transform hover:scale-105"
          >
            ← Back to Home
          </button>
        </Link>
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 hover:bg-green-700 text-gray-200"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center text-white text-lg mt-12">
          Loading projects...
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      )}

      {/* Pagination Controls */}
      {filteredProjects.length > 0 && (
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-xl text-gray-200">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TechPage;
