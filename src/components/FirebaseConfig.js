import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

require('dotenv').config()

const firebaseConfig = {
    // apiKey: "AIzaSyAh09pa75JHTiJg9xz7BOf2UJX66bMQZcM",
    // authDomain: "projektet-b20ac.firebaseapp.com",
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: "https://projektet-b20ac.firebaseio.com",
    projectId: "projektet-b20ac",
    storageBucket: "projektet-b20ac.appspot.com",
    messagingSenderId: "114736658177",
    appId: "1:114736658177:web:176566830c7a370abf8d00",
    measurementId: "G-4YS4BH16MN"
};

    firebase.initializeApp(firebaseConfig);

    //firebase.firestore().settings({timestampsInSnapshots:true});

    export const googleProvider = new firebase.auth.GoogleAuthProvider();

    export const auth = firebase.auth();
    export default firebase;