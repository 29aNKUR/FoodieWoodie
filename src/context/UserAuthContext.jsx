import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState, useContext } from "react";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  function signUp(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  function logIn(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }

  function logOut() {
    signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider);
  }

  useEffect(() => {
    //unsubscribe is a functionality to cleanup the info about current user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    //to cleanup on unmounting of component
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn }}>
      {children}
    </userAuthContext.Provider>
  );
}

//hook
export function useUserAuth() {
  return useContext(userAuthContext);
}
