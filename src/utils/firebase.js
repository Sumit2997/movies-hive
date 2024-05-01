// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6HvFmg2VpqcOn67qv85VVODh5Rc1IIjY",
  authDomain: "netflixgpt-fb46b.firebaseapp.com",
  projectId: "netflixgpt-fb46b",
  storageBucket: "netflixgpt-fb46b.appspot.com",
  messagingSenderId: "104395329001",
  appId: "1:104395329001:web:757389efbb8599cf408f78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
