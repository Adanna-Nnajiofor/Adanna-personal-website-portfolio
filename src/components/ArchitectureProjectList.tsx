"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbArch } from "../config/firebaseConfig";

interface BaseProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectListProps {
  setProjects: (projects: BaseProject[]) => void;
  setLoading: (loading: boolean) => void;
}

export default function ArchitectureProjectList({
  setProjects,
  setLoading,
}: ProjectListProps) {
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

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

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const querySnapshot = await fetchWithTimeout(
          getDocs(collection(dbArch, "architectureprojects"))
        );

        const projectsData: BaseProject[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<BaseProject, "id">),
        }));

        setProjects(projectsData);
      } catch (error: any) {
        console.error("Fetch error:", error);
        setError(
          error.message === "TimeoutError"
            ? "Request timed out. Please try again."
            : "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [retryCount, setProjects, setLoading]);

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
