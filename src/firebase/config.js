import {initializeApp} from "firebase/app";


// import 'firebase/firestore';
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
import 'firebase/storage'

// import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4F8ZUG6TYPlYW-67o_1obMQ8OR8all9U",
  authDomain: "ootd-10477.firebaseapp.com",
  projectId: "ootd-10477",
  storageBucket: "ootd-10477.appspot.com",
  messagingSenderId: "884996212859",
  appId: "1:884996212859:web:69a9ac0cfa0e715a43fade",
};

// 
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// const projectStorage = firebase.storage();
//  const projectFirestore = firebase.firestore();

//  export { projectFirestore };
