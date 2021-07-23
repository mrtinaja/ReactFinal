
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyC_lK3mQ650iEZ64vCT46BMYgxbuWbhz8c",
  authDomain: "myproyect-a944c.firebaseapp.com",
  projectId: "myproyect-a944c",
  storageBucket: "myproyect-a944c.appspot.com",
  messagingSenderId: "786193964536",
  appId: "1:786193964536:web:856683db01aba6acfc8a0d",
  measurementId: "G-M18JZ09PBL"
}

  firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.autenticacion = firebase.auth()
export default firebase
