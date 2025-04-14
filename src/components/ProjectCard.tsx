"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Define TypeScript interface for project props
interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    link: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-full h-56">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-blue-500 font-semibold">
            {project.category}
          </span>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            View Project →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
