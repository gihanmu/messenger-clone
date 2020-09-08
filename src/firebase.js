import firebase from 'firebase';

const firebaseConfig = {
   
};

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwWPKRZrRBRGVFV64Lob-D_vsHLO4SGRQ",
    authDomain: "facebook-messenger-clone-90753.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-90753.firebaseio.com",
    projectId: "facebook-messenger-clone-90753",
    storageBucket: "facebook-messenger-clone-90753.appspot.com",
    messagingSenderId: "421985890069",
    appId: "1:421985890069:web:1fe31d81845ce73803831c",
    measurementId: "G-GW2ZKL8S4H"
})

const db = firebaseApp.firestore();

export default db;