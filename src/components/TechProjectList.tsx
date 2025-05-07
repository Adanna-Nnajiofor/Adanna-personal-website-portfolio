"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbTech } from "../config/firebaseConfig";

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

interface TechProjectListProps {
  setTechProjects: (projects: Project[]) => void;
  setLoading: (loading: boolean) => void;
}

const fetchWithTimeout = <T,>(
  promise: Promise<T>,
  timeoutMs = 10000
): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("TimeoutError")), timeoutMs)
    ),
  ]);
};

export default function TechProjectList({
  setTechProjects,
  setLoading,
}: TechProjectListProps) {
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let mounted = true;

    const fetchTechProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const snapshot = await fetchWithTimeout(
          getDocs(collection(dbTech, "techprojects"))
        );
        const data: Project[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title ?? "",
          description: doc.data().description ?? "",
          category: doc.data().category ?? "Uncategorized",
          techStack: doc.data().techStack ?? [],
          image: doc.data().image ?? "/assets/developer-coding.jpg",
          link: doc.data().link ?? "#",
          github: doc.data().github ?? "#",
        }));

        if (mounted) setTechProjects(data);
      } catch (err: any) {
        console.error("Firestore error:", err);
        setError(
          err.message === "TimeoutError"
            ? "Request timed out. Please try again."
            : "Something went wrong. Please try again."
        );
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchTechProjects();
    return () => {
      mounted = false;
    };
  }, [setTechProjects, setLoading, retryCount]);

  if (error) {
    return (
      <div className="text-red-600 text-center mt-4">
        <p>{error}</p>
        <button
          className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setRetryCount((prev) => prev + 1)}
        >
          Retry
        </button>
      </div>
    );
  }

  return null;
}
