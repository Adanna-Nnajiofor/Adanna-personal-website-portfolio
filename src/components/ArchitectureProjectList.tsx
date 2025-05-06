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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(
          collection(dbArch, "architectureprojects")
        );

        const projectsData: BaseProject[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<BaseProject, "id">),
        }));

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects from Firestore:", error);
      } finally {
        setLoading(false);
        setIsLoaded(true);
      }
    };

    fetchProjects();
  }, [setProjects, setLoading]);

  if (!isLoaded) {
    return null;
  }

  return null;
}
