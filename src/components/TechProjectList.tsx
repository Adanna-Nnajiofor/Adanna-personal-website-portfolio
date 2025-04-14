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
    const fetchTechProjects = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(dbTech, "techprojects"));
        const projectsData: Project[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id, // fallback to timestamp if id is not a number
            title: data.title || "",
            description: data.description || "",
            category: data.category || "Uncategorized",
            techStack: data.techStack || [],
            image: data.image || "/fallback.jpg",
            link: data.link || "#",
            github: data.github || "#",
          };
        });

        setTechProjects(projectsData);
      } catch (error) {
        console.error("Error fetching tech projects from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechProjects();
  }, [setTechProjects, setLoading]);

  return null;
}
