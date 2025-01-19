import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCK-gPOrgW15TEOg_FKyHFQgJyNzTXYZPE",
  authDomain: "cookies-540b9.firebaseapp.com",
  projectId: "cookies-540b9",
  storageBucket: "cookies-540b9.firebasestorage.app",
  messagingSenderId: "990695694032",
  appId: "1:990695694032:web:6831723c22a6fdfabdc8d5",
  measurementId: "G-WM96WQF4SG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
