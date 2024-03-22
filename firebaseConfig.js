import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "notes-app-db90e.firebaseapp.com",
  projectId: "notes-app-db90e",
  storageBucket: "notes-app-db90e.appspot.com",
  messagingSenderId: "985706702515",
  appId: "1:985706702515:web:9aabe4f399c9e85e0db2c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
