import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAbrMk3jnGXoT5tBldISsRWZr0Qp2ByC00",
  authDomain: "promane-5d31f.firebaseapp.com",
  databaseURL: "https://promane-5d31f.firebaseio.com",
  projectId: "promane-5d31f",
  storageBucket: "promane-5d31f.appspot.com",
  messagingSenderId: "584170797296"
};
firebase.initializeApp(config);

export default firebase;
