import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "week3assignment-2f41d.firebaseapp.com",
  projectId: "week3assignment-2f41d",
  storageBucket: "week3assignment-2f41d.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefghijk123456",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
