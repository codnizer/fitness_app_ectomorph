import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCae0rig9lZGLEbmB8LHK5ZzhEyaqmm_IQ",
    authDomain: "fitness-ectomorph.firebaseapp.com",
    projectId: "fitness-ectomorph",
    storageBucket: "fitness-ectomorph.appspot.com",
    messagingSenderId: "829996427395",
    appId: "1:829996427395:web:6253a98e361cd108bbd3b6",
    measurementId: "G-1M3SRXMWYW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

