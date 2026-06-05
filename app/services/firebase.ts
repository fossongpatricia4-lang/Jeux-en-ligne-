import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPgY5a-7wTQhnCULiimM8KK2qzu4Dszvw",
  authDomain: "jeux-en-ligne-80a.firebaseapp.com",
  projectId: "jeux-en-ligne-80a",
  storageBucket: "jeux-en-ligne-80a.firebasestorage.app",
  messagingSenderId: "962820686297",
  appId: "1:962820686297:web:77163a4ebbcbb3e45f59c8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;