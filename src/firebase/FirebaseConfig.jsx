// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-KV9WhcyHdApqktpov_riqZv2W_F5VqY",
    authDomain: "myecom-f26ca.firebaseapp.com",
    projectId: "myecom-f26ca",
    storageBucket: "myecom-f26ca.appspot.com",
    messagingSenderId: "145631502340",
    appId: "1:145631502340:web:e4b27226a4f6163b301551"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }