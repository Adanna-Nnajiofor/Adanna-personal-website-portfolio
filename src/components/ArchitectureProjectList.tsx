"use client";
import { useEffect } from "react";
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
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(
          collection(dbArch, "architectureprojects")
        );

        // Mapping the fetched documents to project data
        const projectsData: BaseProject[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<BaseProject, "id">),
        }));

        // Setting the fetched projects to the state
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [setProjects, setLoading]);

  return null;
}
