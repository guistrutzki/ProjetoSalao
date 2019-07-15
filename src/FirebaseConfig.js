import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDTHW-sz1Rp3CN2425yn3gx7G1qpoqXa28",
  authDomain: "projetosalao-e39e1.firebaseapp.com",
  databaseURL: "https://projetosalao-e39e1.firebaseio.com",
  projectId: "projetosalao-e39e1",
  storageBucket: "",
  messagingSenderId: "874896772795",
  appId: "1:874896772795:web:bcb823a69c4e1725"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;