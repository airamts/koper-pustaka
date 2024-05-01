import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhziMKB23AdocpSKlM1J_UjkaYkpF4qqA",
  authDomain: "koperpustaka-f9c6d.firebaseapp.com",
  projectId: "koperpustaka-f9c6d",
  storageBucket: "koperpustaka-f9c6d.appspot.com",
  messagingSenderId: "228015825211",
  appId: "1:228015825211:web:84799904d06186ed6e171e",
  measurementId: "G-LLWMBPBMPJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();