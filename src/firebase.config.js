import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCG2yg1ov75QOxpGf4aohN12vE5Mg0L0IY",
  authDomain: "deras-kitchen-6859c.firebaseapp.com",
  projectId: "deras-kitchen-6859c",
  storageBucket: "deras-kitchen-6859c.appspot.com",
  messagingSenderId: "379231179535",
  appId: "1:379231179535:web:3a2b3f7f0aed668dd5a47a",
  measurementId: "G-5E5NFZBPVN"
};

const app = getApps.Length > 0 ? getApps() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };