// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA08oe1xYViymQvqJZrxY7h-ycUyDjxLeQ",
  authDomain: "react-journal-a30a6.firebaseapp.com",
  projectId: "react-journal-a30a6",
  storageBucket: "react-journal-a30a6.appspot.com",
  messagingSenderId: "53803452415",
  appId: "1:53803452415:web:84be3bcae5980c8dc209ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) //has all user information 
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)