// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-78c11.firebaseapp.com",
  projectId: "mern-blog-78c11",
  storageBucket: "mern-blog-78c11.appspot.com",
  messagingSenderId: "142206043148",
  appId: "1:142206043148:web:e62bd268c5325284639a29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);