
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAcabvyoRl4ZWDN9JUmUTFncr54XnIgXS4",
    authDomain: "fifijust-3622.firebaseapp.com",
    projectId: "fifijust-3622",
    storageBucket: "fifijust-3622.appspot.com",
    messagingSenderId: "18303908771",
    appId: "1:18303908771:web:d7ae8fbb3e18939350b816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
