import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";


import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZlk4leYpCHedu-GY23T5L_NtywpEwKVA",
  authDomain: "high-tech-upbringing-bureau.firebaseapp.com",
  projectId: "high-tech-upbringing-bureau",
  storageBucket: "high-tech-upbringing-bureau.appspot.com",
  messagingSenderId: "964551074295",
  appId: "1:964551074295:web:5e65050b36ca3da25ccef2",
  measurementId: "G-R1NMZ9ZHBM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
