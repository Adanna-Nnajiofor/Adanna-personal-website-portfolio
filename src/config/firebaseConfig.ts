import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Architecture Firebase Config
const firebaseConfigArch = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_ARCH,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_ARCH,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_ARCH,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_ARCH,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_ARCH,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_ARCH,
};

// Tech Firebase Config
const firebaseConfigTech = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_TECH,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_TECH,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_TECH,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_TECH,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_TECH,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_TECH,
};

// Avoid reinitializing Firebase apps
const appArch =
  getApps().find((app) => app.name === "[DEFAULT]") ||
  initializeApp(firebaseConfigArch);
const appTech =
  getApps().find((app) => app.name === "techApp") ||
  initializeApp(firebaseConfigTech, "techApp");

// Get Firestore instances
const dbArch = getFirestore(appArch); // architecture db
const dbTech = getFirestore(appTech); // tech db

export { dbArch, dbTech };
