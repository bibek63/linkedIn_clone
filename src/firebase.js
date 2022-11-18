import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfZvjU3AHwdvsHo80O6HENue4CU-ATpos",
  authDomain: "linkedinclone-7ad77.firebaseapp.com",
  projectId: "linkedinclone-7ad77",
  storageBucket: "linkedinclone-7ad77.appspot.com",
  messagingSenderId: "1082816662510",
  appId: "1:1082816662510:web:e44803a2953213eed1dcff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
