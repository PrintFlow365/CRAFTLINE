
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA2NYPHL54rPGj1reAD2FWojXE0um1dpeM",
  authDomain: "craftline-74c3c.firebaseapp.com",
  projectId: "craftline-74c3c",
  storageBucket: "craftline-74c3c.firebasestorage.app",
  messagingSenderId: "634807958669",
  appId: "1:634807958669:web:263c54dae121967e6336c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };