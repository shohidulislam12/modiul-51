// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVqLwIjC_GxNtC4G39TLRTWGHJgKK1xpc",
  authDomain: "auth-mohamilon-2.firebaseapp.com",
  projectId: "auth-mohamilon-2",
  storageBucket: "auth-mohamilon-2.firebasestorage.app",
  messagingSenderId: "252891274186",
  appId: "1:252891274186:web:d2ba3ae0f77962dd368d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);