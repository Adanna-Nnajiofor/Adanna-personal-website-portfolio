"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flip-card w-full h-[400px]">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front rounded-xl overflow-hidden shadow-lg bg-white">
          <Image
            src={project.image || "/assets/developer-coding.jpg"}
            alt={project.title}
            width={400}
            height={300}
            priority
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back rounded-xl bg-white p-6 flex flex-col justify-center items-center shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-2 text-gray-200">
            {project.title}
          </h3>
          {project.category && (
            <p className="text-gray-700 mb-1">
              <strong>Category:</strong> {project.category}
            </p>
          )}
          {project.techStack.length > 0 && (
            <p className="text-gray-700 mb-1">
              <strong>Tech Stack:</strong> {project.techStack.join(", ")}
            </p>
          )}
          <div className="flex gap-4 mt-4">
            <Link
              href={project.link}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Project
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              View GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
