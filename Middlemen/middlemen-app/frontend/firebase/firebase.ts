// frontend/firebase/firebase.ts

// Install Firebase CLI: npm install firebase
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI5g2kLsk43BRcixnblHzG-rPOdB5CZDc",
  authDomain: "middlemen-e8399.firebaseapp.com",
  projectId: "middlemen-e8399",
  storageBucket: "middlemen-e8399.firebasestorage.app",
  messagingSenderId: "178705625292",
  appId: "1:178705625292:web:047efbe5b981fd60895269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
