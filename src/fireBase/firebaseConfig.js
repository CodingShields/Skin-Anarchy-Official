// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD5xWZaWjdheAiIPG3vKPajkLMMmbwTuNQ",
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
export default app;
