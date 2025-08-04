// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASl1krjs2SiqMH0TKJ0EJadP6QRKcXvDw",
  authDomain: "nextread-bfe98.firebaseapp.com",
  projectId: "nextread-bfe98",
  storageBucket: "nextread-bfe98.appspot.com",
  messagingSenderId: "1086934145023",
  appId: "1:1086934145023:web:280fa43e4d569edeeb79ca",
  measurementId: "G-3BRWXBR9K2"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Auth (used in AuthPage)
export const auth = getAuth(app);