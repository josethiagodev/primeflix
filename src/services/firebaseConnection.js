// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";


// Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONNECT_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONNECT_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_CONNECT_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONNECT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONNECT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_CONNECT_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_CONNECT_MEASUREMENT_ID,
};


// Initialize Firebase (Configuration + Database + Analytics)
const firebaseApp = initializeApp(firebaseConfig);


// Acesso ao Cloud Firestore Database (NoSQL)
const db = getFirestore(firebaseApp);
// Acesso ao serviço de autenticação do Firebase (login e registro de usuários)
const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(firebaseApp);


export { 
  db, 
  auth 
};