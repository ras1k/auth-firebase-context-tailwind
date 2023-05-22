// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABzPwaehMgiaQROCxTmSvh6MYuGYVSSbo",
  authDomain: "auth-firebase-context-ta-a8d08.firebaseapp.com",
  projectId: "auth-firebase-context-ta-a8d08",
  storageBucket: "auth-firebase-context-ta-a8d08.appspot.com",
  messagingSenderId: "981084608340",
  appId: "1:981084608340:web:70bff646d9d8339b6e9ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;