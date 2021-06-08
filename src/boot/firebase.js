
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCoQ3MO3HvU-AbZ8WZG5MB9BCTdNU2TvVQ",
  authDomain: "smackchat-bdc4b.firebaseapp.com",
  projectId: "smackchat-bdc4b",
  storageBucket: "smackchat-bdc4b.appspot.com",
  messagingSenderId: "874944335844",
  appId: "1:874944335844:web:ec71a7454507ce0b97c1f1"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb }