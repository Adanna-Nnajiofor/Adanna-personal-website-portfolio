import { collection, addDoc } from "firebase/firestore";
import { dbTech } from "../config/firebaseConfig";

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const addTechProjectToFirestore = async (project: ProjectData) => {
  try {
    const docRef = await addDoc(collection(dbTech, "techprojects"), project);
    console.log("Tech project added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding tech project:", error);
    return null;
  }
};
