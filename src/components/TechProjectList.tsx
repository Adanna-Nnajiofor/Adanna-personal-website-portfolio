"use client";
import { useEffect } from "react";
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

export default function TechProjectList({
  setTechProjects,
  setLoading,
}: TechProjectListProps) {
  useEffect(() => {
    let mounted = true;

    const fetchTechProjects = async () => {
      setLoading(true);
      try {
        const snapshot = await getDocs(collection(dbTech, "techprojects"));
        const data: Project[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title ?? "",
          description: doc.data().description ?? "",
          category: doc.data().category ?? "Uncategorized",
          techStack: doc.data().techStack ?? [],
          image: doc.data().image ?? "/fallback.jpg",
          link: doc.data().link ?? "#",
          github: doc.data().github ?? "#",
        }));

        if (mounted) setTechProjects(data);
      } catch (err) {
        console.error("Firestore error:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchTechProjects();
    return () => {
      mounted = false;
    };
  }, [setTechProjects, setLoading]);

  return null;
}
