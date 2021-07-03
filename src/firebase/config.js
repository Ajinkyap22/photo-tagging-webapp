import firebase from "firebase/app";
import "firebase/firestore";

// firebse config & initialization
const firebaseConfig = {
  apiKey: "AIzaSyB8-xfERk2ZOCe-xUOyQYfSDh9Kexz71eM",
  authDomain: "where-s-that-pokemon.firebaseapp.com",
  projectId: "where-s-that-pokemon",
  storageBucket: "where-s-that-pokemon.appspot.com",
  messagingSenderId: "251071800530",
  appId: "1:251071800530:web:8864b7d82994d6ffdab90b",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firebase, firestore };
