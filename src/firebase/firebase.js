import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyApw-tk2WR6gdemjY75Ixqsc6p9js2NIQQ",
  authDomain: "proyectoreact-fbfeb.firebaseapp.com",
  projectId: "proyectoreact-fbfeb",
  storageBucket: "proyectoreact-fbfeb.appspot.com",
  messagingSenderId: "671075867896",
  appId: "1:671075867896:web:274891c3be9a85091b2f0d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);