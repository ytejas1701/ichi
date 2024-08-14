import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDx1_Irv025WoFQLaRX-a9-RSY000FwPkQ",
  authDomain: "ichi-af75a.firebaseapp.com",
  projectId: "ichi-af75a",
  storageBucket: "ichi-af75a.appspot.com",
  messagingSenderId: "639524358918",
  appId: "1:639524358918:web:7add5bd988e332f0092c87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
