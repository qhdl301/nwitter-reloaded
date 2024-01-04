import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeHrJ787q6t0RIwk3HpJoGpJvIflRcOlI",
  authDomain: "nwitter-reloaded-b7bbe.firebaseapp.com",
  projectId: "nwitter-reloaded-b7bbe",
  storageBucket: "nwitter-reloaded-b7bbe.appspot.com",
  messagingSenderId: "82131221779",
  appId: "1:82131221779:web:e02c82ebbba5ae8c6b6ee6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
