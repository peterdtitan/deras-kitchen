import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDEkBoTGq24D4EcGzahabu62d0WEJUmniM",
    authDomain: "deras-kitchen.firebaseapp.com",
    databaseURL: "https://deras-kitchen-default-rtdb.firebaseio.com",
    projectId: "deras-kitchen",
    storageBucket: "deras-kitchen.appspot.com",
    messagingSenderId: "395812230728",
    appId: "1:395812230728:web:06dc2977c8cb58e07a6a7d",
    measurementId: "G-4HFTCZES13"
  };

const app = getApps.Length > 0 ? getApps() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };