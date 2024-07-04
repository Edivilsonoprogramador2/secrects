// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf0LEk5dZCz_Mwa4NdgSGncVTYZbEum98",
  authDomain: "secrets-secrets-secret.firebaseapp.com",
  projectId: "secrets-secrets-secret",
  storageBucket: "secrets-secrets-secret.appspot.com",
  messagingSenderId: "524100305282",
  appId: "1:524100305282:web:eba7a23e94f3968cc74f9b",
  measurementId: "G-VVM6PPYZF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);