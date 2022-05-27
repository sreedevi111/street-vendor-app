import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAkKExCfEqNYbpIrW-5LaANCAqFtzbkWU",
  authDomain: "local-vendors-f4611.firebaseapp.com",
  projectId: "local-vendors-f4611",
  storageBucket: "local-vendors-f4611.appspot.com",
  messagingSenderId: "164013041398",
  appId: "1:164013041398:web:d5d0e6f067ef6c9910aed7",
};

if (firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
