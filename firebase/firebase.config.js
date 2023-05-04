// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqgge-6TO1JV16VvEj19RwcaU5kKHiA_Y",
  authDomain: "chef-s-conclave.firebaseapp.com",
  projectId: "chef-s-conclave",
  storageBucket: "chef-s-conclave.appspot.com",
  messagingSenderId: "75916932700",
  appId:"1:75916932700:web:417a08ef7734d8b0f5d899"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;