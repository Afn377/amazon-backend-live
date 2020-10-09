import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEwVoFnA1pCPG2ZO7Q2Vi2ov-wEpiih8Y",
  authDomain: "clone-a333e.firebaseapp.com",
  databaseURL: "https://clone-a333e.firebaseio.com",
  projectId: "clone-a333e",
  storageBucket: "clone-a333e.appspot.com",
  messagingSenderId: "225049651280",
  appId: "1:225049651280:web:f0c7077f6c0d20d0cec955",
  measurementId: "G-RPMXM4QBQ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
