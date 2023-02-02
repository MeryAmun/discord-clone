// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FirebaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBsOgoJV0xmI9iFWzVm8g8NPUJMzn_ex9c",
  authDomain: "discord-clone-ea63c.firebaseapp.com",
  projectId: "discord-clone-ea63c",
  storageBucket: "discord-clone-ea63c.appspot.com",
  messagingSenderId: "1026249891066",
  appId: "1:1026249891066:web:3d1ba6879ff4cf99e8fd43",
  measurementId: "G-9P5VK7P9JC"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });