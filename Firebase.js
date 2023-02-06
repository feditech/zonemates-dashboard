
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";
import Router from "next/router";
import { toast } from "react-toastify";
const signupSuccessfullToast = () => toast("Signup Successfull");
const loginSuccessfullToast = () => toast("Login Successfull");
const logoutSuccessfullToast = () => toast("Logout Successfull");

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
  console.log(values);
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      const id = user.uid;
      console.log("User authenticated", user.uid);
      await setDoc(doc(db, "users", id), {
        ...values,
        id: id,
        type: "owner",
      });
      signupSuccessfullToast();
      Router.push("/dashboard");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

const userLogin = (values) => {
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User has signin successfully");
      loginSuccessfullToast();
      Router.push("/dashboard");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
const Logout = ()=>{
  signOut(auth).then(() => {
    logoutSuccessfullToast()
  }).catch((error) => {
    // An error happened.
  });
}






export {
  auth,
  userSignup,
  userLogin,
  db,
  collection,
  addDoc,
  onAuthStateChanged,
  Logout,
  onSnapshot
};

// async function signInWithPhoneNumber(phoneNumber) {
//   console.log(phoneNumber)
//   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//   console.log(confirmation)
// }
