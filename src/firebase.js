import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5YWd4VxexGoq07YhHvcJ7iQMTx8sns8g",
  authDomain: "wa-clone-3d0ac.firebaseapp.com",
  projectId: "wa-clone-3d0ac",
  storageBucket: "wa-clone-3d0ac.appspot.com",
  messagingSenderId: "1063295852452",
  appId: "1:1063295852452:web:48d743e71d589b253fab31",
  measurementId: "G-408XWE4QW8"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
