import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMymoDWDmyTObvi0GYkJyW0XJR4sO-f20",
  authDomain: "genius-car-services-85d5c.firebaseapp.com",
  projectId: "genius-car-services-85d5c",
  storageBucket: "genius-car-services-85d5c.appspot.com",
  messagingSenderId: "31325680248",
  appId: "1:31325680248:web:64a86d8c1a83821f26338d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
