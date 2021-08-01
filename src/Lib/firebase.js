import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Firebase Config
export const config = {
  apiKey: "AIzaSyAyRueBmBSzQJAOCKntgcTLD-w_XyEH-Uc",
  authDomain: "web-replica-503d1.firebaseapp.com",
  projectId: "web-replica-503d1",
  storageBucket: "web-replica-503d1.appspot.com",
  messagingSenderId: "307870946837",
  appId: "1:307870946837:web:5d3eff143ae26a7ee0a01c",
  measurementId: "G-HQW8WDFDH7",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
