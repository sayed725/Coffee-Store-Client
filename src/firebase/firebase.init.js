// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZE3Irn-aFiIUcYxXBw-zOmbPt8qhymUU",
  authDomain: "coffee-store-c327a.firebaseapp.com",
  projectId: "coffee-store-c327a",
  storageBucket: "coffee-store-c327a.firebasestorage.app",
  messagingSenderId: "699482396833",
  appId: "1:699482396833:web:fcc376c1551311ab1bb8e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
