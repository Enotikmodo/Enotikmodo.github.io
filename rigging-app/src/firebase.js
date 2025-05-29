// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWb65ZA83WvRn5knNJaH0fOdSpjfabQvw",
    authDomain: "riggingapp-e4793.firebaseapp.com",
    projectId: "riggingapp-e4793",
    storageBucket: "riggingapp-e4793.appspot.com",
    messagingSenderId: "420752533537",
    appId: "1:420752533537:web:99f1e25a37eb9fa7eb1b60",
    measurementId: "G-Z06BMLT6QG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
