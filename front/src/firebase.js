// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw-wD5aoDi2Zr-QzPOqlzN16mQallG4_o",
  authDomain: "taskmanager-98a5d.firebaseapp.com",
  projectId: "taskmanager-98a5d",
  storageBucket: "taskmanager-98a5d.appspot.com",
  messagingSenderId: "224763596762",
  appId: "1:224763596762:web:3837fcea24f7e7ce56fae3",
  measurementId: "G-M3RWVF2KKH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
