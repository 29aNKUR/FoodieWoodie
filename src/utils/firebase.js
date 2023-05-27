// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUUJc1sA7MipJpZGnlKVLurwigk7FoAIU",
  authDomain: "foodiewoodie-auth.firebaseapp.com",
  projectId: "foodiewoodie-auth",
  storageBucket: "foodiewoodie-auth.appspot.com",
  messagingSenderId: "791637211639",
  appId: "1:791637211639:web:c5e42a03b7baebff1896f2",
  measurementId: "G-LFBTQM0DM2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app,auth} ;
