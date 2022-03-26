import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgvFL-ct7FSP-Dsw4LMARfCmcnq4Eo7rY",
    authDomain: "dynastypro-446e2.firebaseapp.com",
    projectId: "dynastypro-446e2",
    storageBucket: "dynastypro-446e2.appspot.com",
    messagingSenderId: "53557920505",
    appId: "1:53557920505:web:1f3a91214d4388612f1828"
});

var db = firebaseApp.firestore();

export { db };