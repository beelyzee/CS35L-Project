import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyACMOd6VXktUZpNqudzKvyXPEgiiOThe7Y",
  authDomain: "prfl-8d27f.firebaseapp.com",
  databaseURL: "https://prfl-8d27f-default-rtdb.firebaseio.com",
  projectId: "prfl-8d27f",
  storageBucket: "prfl-8d27f.appspot.com",
  messagingSenderId: "750525471821",
  appId: "1:750525471821:web:3ed40874533fc15b3bd004",
  measurementId: "G-7VKY4CFFPG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// based on example
function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userId);
    
    set(reference, {username: name, email: email, profile_picture: imageUrl});
}

console.log("testing firebase-config.js");
writeUserData("example-user", "a", "b", "c");

