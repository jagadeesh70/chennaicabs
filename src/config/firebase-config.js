import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCis2zNT4BqsFBIx2nn-N_foYa3iycO4uM",
  authDomain: "webrtc-voice-f2092.firebaseapp.com",
  databaseURL:
    "https://webrtc-voice-f2092-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webrtc-voice-f2092",
  storageBucket: "webrtc-voice-f2092.appspot.com",
  messagingSenderId: "762665403583",
  appId: "1:762665403583:web:1febd796217a78eaaff20a",
  measurementId: "G-DGYJMD69P4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
