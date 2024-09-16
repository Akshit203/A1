// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Yirunx5XvxyNBBw3tRl0QF4ayECojSA",
  authDomain: "a1-reactjs.firebaseapp.com",
  projectId: "a1-reactjs",
  storageBucket: "a1-reactjs.appspot.com",
  messagingSenderId: "183897644367",
  appId: "1:183897644367:web:fa0b8619e635fe150cb93a",
  measurementId: "G-W79D2D7VEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

