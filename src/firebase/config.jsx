// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhziMKB23AdocpSKlM1J_UjkaYkpF4qqA',
  authDomain: 'koperpustaka-f9c6d.firebaseapp.com',
  projectId: 'koperpustaka-f9c6d',
  storageBucket: 'koperpustaka-f9c6d.appspot.com',
  messagingSenderId: '228015825211',
  appId: '1:228015825211:web:84799904d06186ed6e171e',
  measurementId: 'G-LLWMBPBMPJ',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;
export { db, storage, auth };
