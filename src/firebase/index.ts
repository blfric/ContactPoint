import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAlQlJdXfv_Y9KxwvypYduTOLCNBYu1knw",
  authDomain: "personal-website-5537d.firebaseapp.com",
  projectId: "personal-website-5537d",
  storageBucket: "personal-website-5537d.appspot.com",
  messagingSenderId: "681537020044",
  appId: "1:681537020044:web:da63fa52ad64330d069ba9"
};

initializeApp(firebaseConfig);

export { getFunctions, httpsCallable };