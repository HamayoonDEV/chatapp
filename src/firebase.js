import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKT0fJRr_pw87oJPY5pEDzfYakcAGXemU",
  authDomain: "chat-d6556.firebaseapp.com",
  projectId: "chat-d6556",
  storageBucket: "chat-d6556.appspot.com",
  messagingSenderId: "73752639034",
  appId: "1:73752639034:web:7a9509e8982c20459a2703",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
