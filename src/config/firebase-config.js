import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  YOUR_KEY
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
