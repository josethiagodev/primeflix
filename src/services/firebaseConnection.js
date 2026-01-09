// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhZ8g30jEVNgYYU77exjPGzRKdFWWu4JM",
  authDomain: "fullstackpro-14c77.firebaseapp.com",
  projectId: "fullstackpro-14c77",
  storageBucket: "fullstackpro-14c77.firebasestorage.app",
  messagingSenderId: "687061016712",
  appId: "1:687061016712:web:aba19834d1bcf8e17c7f3d",
  measurementId: "G-86TL4QK1DJ"
};

// Initialize Firebase (Configuration + Database + Analytics)
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
// const analytics = getAnalytics(firebaseApp);

export { db };