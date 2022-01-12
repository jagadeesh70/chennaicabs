import {initializeApp} from "firebase/app"
import { getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAcu0mD1zlf_Zw_NMyJuMTnIuW22mlSW0w",
    authDomain: "chennai-cabs-new.firebaseapp.com",
    projectId: "chennai-cabs-new",
    storageBucket: "chennai-cabs-new.appspot.com",
    messagingSenderId: "1099372026924",
    appId: "1:1099372026924:web:339edfabc29672d0ea4589",
    measurementId: "G-VHW65J5Q7R"
  };

  const app =  initializeApp(firebaseConfig)
  export const auth = getAuth()
