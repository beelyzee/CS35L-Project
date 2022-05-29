import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: "https://prfl-8d27f-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
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

