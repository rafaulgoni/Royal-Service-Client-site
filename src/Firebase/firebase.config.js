// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6MN90NgsKJ8DZln3lzr3rBEVypnacEZs",
  authDomain: "assignment11-royal-service.firebaseapp.com",
  projectId: "assignment11-royal-service",
  storageBucket: "assignment11-royal-service.appspot.com",
  messagingSenderId: "66126356900",
  appId: "1:66126356900:web:447448a9f351f3dc58e131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
