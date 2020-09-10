import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDb2xkAXZBjvxtJDvXvDQZtHofPwOU1p7s",
  authDomain: "ecommerce--clone-2d5d7.firebaseapp.com",
  databaseURL: "https://ecommerce--clone-2d5d7.firebaseio.com",
  projectId: "ecommerce--clone-2d5d7",
  storageBucket: "ecommerce--clone-2d5d7.appspot.com",
  messagingSenderId: "647453813523",
  appId: "1:647453813523:web:a48a3dd67de4cab17048e6",
  measurementId: "G-L4QR58QNG3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
