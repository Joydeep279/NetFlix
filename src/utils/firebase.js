// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIuMm04Y7TmXyzjxpXKUv43IFniakeXpk",
  authDomain: "netflix-gpt-7a29e.firebaseapp.com",
  projectId: "netflix-gpt-7a29e",
  storageBucket: "netflix-gpt-7a29e.firebasestorage.app",
  messagingSenderId: "443116284642",
  appId: "1:443116284642:web:355e4dd8a35029e2e08cbb",
  measurementId: "G-3WLJM70MQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);