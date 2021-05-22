// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCxt2OfYQyiasc9qVIG1Cu5MtSOto9ElFg",
    authDomain: "netflix-full-clone-21b60.firebaseapp.com",
    projectId: "netflix-full-clone-21b60",
    storageBucket: "netflix-full-clone-21b60.appspot.com",
    messagingSenderId: "1040061869548",
    appId: "1:1040061869548:web:63de565c9c11e2c866a4c9",
    measurementId: "G-MZEEEGWV1X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };