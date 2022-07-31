// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGj8pl1x2d244Wuzspa52zp79nPbTPA_8",
  authDomain: "food-delivery-app-8ecd1.firebaseapp.com",
  projectId: "food-delivery-app-8ecd1",
  storageBucket: "food-delivery-app-8ecd1.appspot.com",
  messagingSenderId: "489709419606",
  appId: "1:489709419606:web:ef7c1dc183e3f0ecb74ff7",
  measurementId: "G-FRMEE9GM43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);