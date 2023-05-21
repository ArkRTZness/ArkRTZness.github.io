// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoyWLRTFK1MTzWHVnDt3B20Js4uVNhWkA",
  authDomain: "pagina-web-aprendizaje.firebaseapp.com",
  projectId: "pagina-web-aprendizaje",
  storageBucket: "pagina-web-aprendizaje.appspot.com",
  messagingSenderId: "301410845084",
  appId: "1:301410845084:web:1454c760bc446b6861c859",
  measurementId: "G-BCLP2RRZWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);