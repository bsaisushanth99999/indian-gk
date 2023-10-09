import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ioqsPO4w84VelF_MbUk4X6h-0wplf7I",
  authDomain: "india-gk-c8e49.firebaseapp.com",
  projectId: "india-gk-c8e49",
  storageBucket: "india-gk-c8e49.appspot.com",
  messagingSenderId: "590697753635",
  appId: "1:590697753635:web:c2bc4cc62b300baaa99596",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
