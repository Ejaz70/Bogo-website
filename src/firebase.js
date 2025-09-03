// import {initializeApp} from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyB8SnFFYtnYCAQBd-pN3uv-cvWkjQKkYHQ",
//   authDomain: "bogo-b945d.firebaseapp.com",
//   projectId: "bogo-b945d",
//   storageBucket: "bogo-b945d.firebasestorage.app",
//   messagingSenderId: "630536046058",
//   appId: "1:630536046058:web:1dc01c5cfb0c300d451e93",
//   databaseURL: "https://bogo-b945d-default-rtdb.firebaseio.com"
// };

// export const app = initializeApp(firebaseConfig);






import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8SnFFYtnYCAQBd-pN3uv-cvWkjQKkYHQ",
  authDomain: "bogo-b945d.firebaseapp.com",
  projectId: "bogo-b945d",
  storageBucket: "bogo-b945d.appspot.com", // ✅ fixed
  messagingSenderId: "630536046058",
  appId: "1:630536046058:web:1dc01c5cfb0c300d451e93",
  databaseURL: "https://bogo-b945d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
