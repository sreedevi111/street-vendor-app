import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-kGKxzHbmVxwz_tGn_cmOqPHI3TSxhXI",
    authDomain: "vendorsapp-d60d5.firebaseapp.com",
    projectId: "vendorsapp-d60d5",
    storageBucket: "vendorsapp-d60d5.appspot.com",
    messagingSenderId: "712387203707",
    appId: "1:712387203707:web:9b9d0ac9e1b07a0b3988de"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
firebase.firestore().settings({ experimentalForceLongPolling: true });
const db = firebase.firestore();


export default db;

