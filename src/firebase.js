import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBLcd3BtDO22-UE4PVB7K9-nz5dZjAsx4",
    authDomain: "whats-app-clone-94f22.firebaseapp.com",
    projectId: "whats-app-clone-94f22",
    storageBucket: "whats-app-clone-94f22.appspot.com",
    messagingSenderId: "828411613965",
    appId: "1:828411613965:web:3aaf25a27c87eb5f98d644",
    measurementId: "G-TK4VS1BPSD"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;