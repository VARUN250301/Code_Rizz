// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzVFGCGSV2zlugIui3TPqWCMIB70KFjOs",
  authDomain: "hacks-coderizzz.firebaseapp.com",
  projectId: "hacks-coderizzz",
  storageBucket: "hacks-coderizzz.appspot.com",
  messagingSenderId: "1093073701407",
  appId: "1:1093073701407:web:d720bda44912e369a9a32a",
  measurementId: "G-WJJ7862YPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
