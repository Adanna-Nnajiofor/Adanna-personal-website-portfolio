"use client";
import { useState, useEffect } from "react";
import ProjectList from "../../components/ArchitectureProjectList";
import Image from "next/image";
import Link from "next/link";
import "../flip.css";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  location?: string;
  client?: string;
}

export default function ArchitecturePage() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const projectsPerPage = 6;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen w-full bg-blue-900 bg-gradient-to-r from-blue-200 to-gray-600 text-gray-900">
      <header className="text-center py-16 bg-gradient-to-r from-blue-500 to-green-600 text-white">
        <h1 className="text-5xl font-extrabold tracking-wide px-2">
          Architectural Designs
        </h1>
        <p className="mt-4 text-lg italic opacity-80">
          Blending creativity with structure to craft timeless spaces.
        </p>

        {/* BACK BUTTON */}
        <Link href="/" passHref>
          <button
            type="button"
            className="mt-6 px-6 py-3 bg-white text-blue-700 border border-blue-700 rounded-full hover:bg-blue-100 transition-all ease-in-out transform hover:scale-105"
          >
            ← Back to Home
          </button>
        </Link>

        <Link href="#projects">
          <button
            type="button"
            className="mt-6 ml-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-full text-white text-lg transition-all ease-in-out transform hover:scale-105"
          >
            See Our Projects
          </button>
        </Link>
      </header>

      <ProjectList setProjects={setAllProjects} setLoading={setLoading} />

      <section id="projects" className="container mx-auto px-6 py-12">
        {loading ? (
          <p className="text-center text-gray-500">Loading projects...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {currentProjects.length > 0 ? (
              currentProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flip-card w-full h-[450px] "
                >
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front rounded-xl overflow-hidden shadow-lg bg-white flex flex-col">
                      <Image
                        src={project.image || "/assets/developer-coding.jpg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        priority
                        className="w-full h-60 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold">
                          {project.title}
                        </h2>
                        <p className="mt-2 text-gray-600 whitespace-pre-wrap">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back rounded-xl bg-white p-6 flex flex-col justify-center items-center shadow-xl text-center">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      {project.location && (
                        <p className="text-gray-700 mb-1">
                          📍 <strong>Location:</strong> {project.location}
                        </p>
                      )}
                      {project.client && (
                        <p className="text-gray-700 mb-2">
                          🧑‍💼 <strong>Client:</strong> {project.client}
                        </p>
                      )}
                      <Link
                        href={project.link}
                        target="_blank"
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        View on WhatsApp →
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No projects available.
              </p>
            )}
          </div>
        )}

        {/* Enhanced Pagination */}
        {!loading && allProjects.length > 0 && (
          <div className="flex flex-col items-center mt-10 space-y-4">
            {/* Page Info */}
            <p className="text-gray-600">
              Page <span className="font-semibold">{page}</span> of{" "}
              <span className="font-semibold">{totalPages}</span>
            </p>

            {/* Pagination Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700 transition"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx + 1)}
                  className={`px-3 py-2 rounded ${
                    page === idx + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
