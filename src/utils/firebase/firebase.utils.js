// import { async } from "@firebase/util";
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx40fjDqIrtJ6SvWmdGrzuUvzaVPsaHs8",
  authDomain: "e-commerce-ff062.firebaseapp.com",
  projectId: "e-commerce-ff062",
  storageBucket: "e-commerce-ff062.appspot.com",
  messagingSenderId: "945039949660",
  appId: "1:945039949660:web:11fc67f326521d2f560b99",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const Provider = new GoogleAuthProvider();

Provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, Provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, Provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    console.log("Hello ", additionalInformation);
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
