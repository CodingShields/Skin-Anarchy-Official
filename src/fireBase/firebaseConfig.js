// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "skinanarchy.firebaseapp.com",
  projectId: "skinanarchy",
  storageBucket: "skinanarchy.appspot.com",
  messagingSenderId: "861753310582",
  appId: "1:861753310582:web:d4f250c1c185339de30e57",
  measurementId: "G-G556D394B8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

