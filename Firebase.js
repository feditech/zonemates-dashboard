import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Router from "next/router";

const firebaseConfig = {
  apiKey: "AIzaSyD3Fc7tgTGDxJ3s70eDi1OA9WXkdhJbo4Y",
  authDomain: "zonemates-app-698b9.firebaseapp.com",
  projectId: "zonemates-app-698b9",
  storageBucket: "zonemates-app-698b9.appspot.com",
  messagingSenderId: "393941099307",
  appId: "1:393941099307:web:e291b0a4232973d0f41b6e",
  measurementId: "G-E8QYX3MQBC",
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

const userSignup = (values) => {
  createUserWithEmailAndPassword(firebaseAuth, values.email, values.password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      const docRef = await addDoc(collection(db, "users"), values);
      console.log("Document written with ID: ", docRef.id);
      Router.push("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

// async function signInWithPhoneNumber(phoneNumber) {
//   console.log(phoneNumber)
//   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//   console.log(confirmation)
// }

const userLogin = (values) => {
  signInWithEmailAndPassword(firebaseAuth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User has signin successfully");
      Router.push("/");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export { auth, userSignup, userLogin, db, collection, addDoc };
