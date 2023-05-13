// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getDocs,  orderBy,startAfter,where, startAt,collection, getFirestore,doc,setDoc,getDoc, addDoc, onSnapshot, limitToLast,  endBefore,limit,query, getAuth} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYsImynanmaJO3OJ_6Ja2ykiY13mnJKsA",
  authDomain: "black-axe-tech.firebaseapp.com",
  projectId: "black-axe-tech",
  storageBucket: "black-axe-tech.appspot.com",
  messagingSenderId: "648087190781",
  appId: "1:648087190781:web:da2c6324e79f7286075294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)  
export const auth = getAuth(app) 