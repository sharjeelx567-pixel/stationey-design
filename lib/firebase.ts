// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQGhVbUjkiblwVR1eWnqP_-pAtdK_bE8w",
  authDomain: "ecommerce-7047b.firebaseapp.com",
  projectId: "ecommerce-7047b",
  storageBucket: "ecommerce-7047b.firebasestorage.app",
  messagingSenderId: "794931119288",
  appId: "1:794931119288:web:49ffb2d9de914777f0a04d",
  measurementId: "G-RLRE497G08",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Auth
export const auth = getAuth(app)

export default app
