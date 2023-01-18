// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7MH-urRkPTMTsI2clwKCSRYchENYlIgc",
  authDomain: "gadget-house-app.firebaseapp.com",
  projectId: "gadget-house-app",
  storageBucket: "gadget-house-app.appspot.com",
  messagingSenderId: "816471626195",
  appId: "1:816471626195:web:180655fe2bcb41a1e09f26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
