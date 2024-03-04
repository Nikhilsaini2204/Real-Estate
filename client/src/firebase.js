// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-228cf.firebaseapp.com",
  projectId: "mern-estate-228cf",
  storageBucket: "mern-estate-228cf.appspot.com",
  messagingSenderId: "1004728756398",
  appId: "1:1004728756398:web:821c8edfabc9a4acb9253f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);