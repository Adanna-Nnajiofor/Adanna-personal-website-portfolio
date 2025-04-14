import { collection, addDoc } from "firebase/firestore";
import { dbArch } from "../config/firebaseConfig";

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const addProjectToFirestore = async (project: ProjectData) => {
  try {
    const docRef = await addDoc(
      collection(dbArch, "architectureprojects"),
      project
    );
    console.log("Document written with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding project:", error);
    return null;
  }
};
