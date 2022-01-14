// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZup5WkAmRe_-lY5ucdtv-WwsYUsvq370",
  authDomain: "ecommerce-site-99f63.firebaseapp.com",
  projectId: "ecommerce-site-99f63",
  storageBucket: "ecommerce-site-99f63.appspot.com",
  messagingSenderId: "149809640639",
  appId: "1:149809640639:web:761aa3ffb3f904f6a6020a",
  measurementId: "G-EY84Z059LH",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => signInWithPopup(auth, provider);
