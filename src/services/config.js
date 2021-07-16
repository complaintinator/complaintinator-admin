import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_ADMIN_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_ADMIN_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_ADMIN_PROJECT_ID,
  storageBucket: process.env.REACT_APP_ADMIN_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_ADMIN_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ADMIN_ID,
};

firebase.initializeApp(config);

const adminFirebaseAuth = firebase.auth();

export { adminFirebaseAuth };
