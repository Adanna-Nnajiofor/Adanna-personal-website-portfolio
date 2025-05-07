"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaDraftingCompass, FaLaptopCode } from "react-icons/fa";
import ProjectSlider from "./ProjectSlider";
import ArchitectureProjectList from "../components/ArchitectureProjectList";
import TechProjectList from "../components/TechProjectList";

interface BaseProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const WorkSection = () => {
  const [architectureProjects, setArchitectureProjects] = useState<
    BaseProject[]
  >([]);
  const [techProjects, setTechProjects] = useState<BaseProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMoreArchitecture, setHasMoreArchitecture] = useState<boolean>(true);
  const [hasMoreTech, setHasMoreTech] = useState<boolean>(true);

  useEffect(() => {
    // This will handle the logic to fetch paginated architecture projects
    const fetchArchitectureProjects = async () => {
      try {
        const response = await fetch(`/api/architecture-projects?page=${page}`);
        const data = await response.json();
        setArchitectureProjects((prev) => [...prev, ...data.projects]);
        setHasMoreArchitecture(data.hasMore);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching architecture projects:", error);
      }
    };

    if (hasMoreArchitecture) {
      fetchArchitectureProjects();
    }
  }, [page, hasMoreArchitecture]);

  useEffect(() => {
    // This will handle the logic to fetch paginated tech projects
    const fetchTechProjects = async () => {
      try {
        const response = await fetch(`/api/tech-projects?page=${page}`);
        const data = await response.json();
        setTechProjects((prev) => [...prev, ...data.projects]);
        setHasMoreTech(data.hasMore);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tech projects:", error);
      }
    };

    if (hasMoreTech) {
      fetchTechProjects();
    }
  }, [page, hasMoreTech]);

  const handleLoadMore = () => {
    if (hasMoreArchitecture) {
      setPage((prev) => prev + 1); // Load next page of architecture projects
    }
    if (hasMoreTech) {
      setPage((prev) => prev + 1); // Load next page of tech projects
    }
  };

  return (
    <div
      id="work"
      className="relative flex flex-col items-center justify-center text-white px-6 py-24 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold text-center mb-12 text-blue-200 drop-shadow-xl"
      >
        Explore My <span className="text-blue-400">Work</span>
      </motion.h1>

      {/* Work Cards */}
      <div className="flex flex-wrap justify-center gap-12">
        {/* Architecture Card */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/architecture">
            <div className="flex flex-col items-center justify-center w-[240px] h-[240px] bg-gradient-to-t from-[#1e3c72] to-[#2a5298] rounded-xl shadow-xl px-10 py-8 text-lg font-semibold text-white border border-white/30 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-500 transform hover:-translate-y-2">
              <FaDraftingCompass className="text-6xl text-blue-400 mb-4 animate-spin-slow" />
              <span className="text-xl">Architecture</span>
            </div>
          </Link>
        </motion.div>

        {/* Tech Card */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/tech">
            <div className="flex flex-col items-center justify-center w-[240px] h-[240px] bg-gradient-to-t from-[#0a0a0a] to-[#1c1c1c] rounded-xl shadow-xl px-10 py-8 text-lg font-semibold text-white border border-white/30 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-green-500 transform hover:-translate-y-2">
              <FaLaptopCode className="text-6xl text-green-400 mb-4 animate-wiggle" />
              <span className="text-xl">Tech</span>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 w-full max-w-6xl text-center"
      >
        <h2 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <div className="flex flex-col gap-12 w-full lg:flex-row lg:justify-between lg:gap-8">
          {/* Architecture Projects */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 p-6 bg-gray-700 rounded-xl shadow-inner border border-white/10"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-4 text-center lg:text-left">
              Architecture Projects
            </h3>
            {loading ? (
              <p className="text-gray-300 text-center">
                Loading architecture projects...
              </p>
            ) : (
              <ProjectSlider
                projects={architectureProjects.map((project, index) => ({
                  ...project,
                  id: `${project.id}${index}`,
                }))}
              />
            )}
          </motion.div>

          {/* Tech Projects */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full lg:w-1/2 p-6 bg-gray-700 rounded-xl shadow-inner border border-white/10"
          >
            <h3 className="text-3xl font-bold text-green-400 mb-4 text-center lg:text-left">
              Tech Projects
            </h3>
            {loading ? (
              <p className="text-gray-300 text-center">
                Loading tech projects...
              </p>
            ) : (
              <ProjectSlider
                projects={techProjects.map((project, index) => ({
                  ...project,
                  id: `${project.id}${index}`,
                }))}
              />
            )}
          </motion.div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          {(hasMoreArchitecture || hasMoreTech) && (
            <button
              onClick={handleLoadMore}
              className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Load More
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSection;
