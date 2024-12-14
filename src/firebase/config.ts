import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAkX7LqKuaAxu8gm66257Rsoh-YyDWPATQ",
  authDomain: "weibing-s-portfolio.firebaseapp.com",
  projectId: "weibing-s-portfolio",
  storageBucket: "weibing-s-portfolio.firebasestorage.app",
  messagingSenderId: "464358598533",
  appId: "1:464358598533:web:d9cddba33f841bc80e86ec",
  measurementId: "G-NS7GSWJ7JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const auth = getAuth(app);