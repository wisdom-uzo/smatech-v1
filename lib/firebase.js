import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBKyUPb40Ww6QcPKtgqhu4s8ZdceWb2Ltw",
  authDomain: "voting-app-3e39a.firebaseapp.com",
  projectId: "voting-app-3e39a",
  storageBucket: "voting-app-3e39a.appspot.com",
  messagingSenderId: "24413341055",
  appId: "1:24413341055:web:fd788e5e913bc618dfc64a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { 
  db, 
  storage, 
  collection, 
  addDoc,
  query,
  where,
  getDocs,
  ref, 
  uploadBytes, 
  getDownloadURL 
};