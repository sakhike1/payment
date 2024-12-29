// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDpKPIjPtNiUp7isABQm72vUDF2WoLpcUs",
    authDomain: "payflow-3bb02.firebaseapp.com",
    projectId: "payflow-3bb02",
    storageBucket: "payflow-3bb02.firebasestorage.app",
    messagingSenderId: "783399141944",
    appId: "1:783399141944:web:532652a2f253cc121adccd",
    measurementId: "G-TJ0V3ZEVDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);