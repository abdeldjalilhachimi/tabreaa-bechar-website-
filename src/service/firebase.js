import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "https://tabreaa-bechar.firebaseio.com",
  projectId: "tabreaa-bechar",
  storageBucket: "",
  messagingSenderId: "720342102191",
  appId: "",
  measurementId: "G-HZ4PFZNZS5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();
export { firebase, googleAuthProvider, database as default };
