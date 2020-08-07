import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANFn0OHelobjUkP6Vu2VkFJz5TuR0OfFA",
  authDomain: "tabreaa-bechar.firebaseapp.com",
  databaseURL: "https://tabreaa-bechar.firebaseio.com",
  projectId: "tabreaa-bechar",
  storageBucket: "tabreaa-bechar.appspot.com",
  messagingSenderId: "720342102191",
  appId: "1:720342102191:web:acc24876c4cfac0fa2a45a",
  measurementId: "G-HZ4PFZNZS5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();
export { firebase, googleAuthProvider, database as default };
