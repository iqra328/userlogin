// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXkneMkSmXfi7WNy_bP8S-2v7rSGDqsHg",
  authDomain: "deziflightpage.firebaseapp.com",
  projectId: "deziflightpage",
  storageBucket: "deziflightpage.firebasestorage.app",
  messagingSenderId: "699054217220",
  appId: "1:699054217220:web:3cb444ce1d04bc6834bd51",
  measurementId: "G-7NKHSFSNG8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
