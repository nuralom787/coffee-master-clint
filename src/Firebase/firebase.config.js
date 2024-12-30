import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnzaVQkYmiIg6EedCzxPkdD0fxvJGNmik",
    authDomain: "coffee-master-17616.firebaseapp.com",
    projectId: "coffee-master-17616",
    storageBucket: "coffee-master-17616.firebasestorage.app",
    messagingSenderId: "988381462610",
    appId: "1:988381462610:web:601fbc6c597ce29e779f8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;