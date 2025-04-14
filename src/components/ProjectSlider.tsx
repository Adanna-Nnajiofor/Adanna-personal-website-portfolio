"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Define TypeScript interface for project structure
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string; // Optional link
  github?: string; // Optional GitHub link
}

// Define prop type for ProjectSlider
interface ProjectSliderProps {
  projects: Project[];
}

// ProjectSlider component
const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      modules={[Navigation]}
      className="relative "
    >
      {projects.map((project, index) => {
        const projectKey = project.id || `project-${index}`;

        return (
          <SwiperSlide
            key={projectKey}
            className="transition-all duration-500 ease-in-out"
          >
            <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden p-4 transform hover:scale-105 hover:shadow-xl transition-all duration-500 w-full h-auto lg:h-[540px]">
              {/* Image Section with Gradient Overlay */}
              <div className="relative w-full  h-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={650}
                  height={300}
                  style={{ objectFit: "cover" }}
                  priority
                  // layout="responsive"
                  className="rounded-md w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-md"></div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-center flex-col gap-4 md:flex-row md:justify-between">
                  {/* Conditional External Link */}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center w-auto bg-blue-600 text-white  py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" /> View Project
                    </Link>
                  )}
                  {/* Conditional GitHub Link */}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center w-auto bg-gray-800 text-white  py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                      <FaGithub className="mr-2" /> View GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSlider;
