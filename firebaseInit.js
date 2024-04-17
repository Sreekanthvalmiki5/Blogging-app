// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrSmdA6StKBTza-F8gR85bffhOA1D1W3U",
  authDomain: "bloggin-app-d631a.firebaseapp.com",
  projectId: "bloggin-app-d631a",
  storageBucket: "bloggin-app-d631a.appspot.com",
  messagingSenderId: "445824852645",
  appId: "1:445824852645:web:ea6af3ec872bf3568c634c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);