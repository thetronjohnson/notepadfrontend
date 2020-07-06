import firebase from 'firebase'

import 'firebase/auth'

 const firebaseConfig = {
    apiKey: "AIzaSyAsGMfPM1t-k4bRppGZUjLTQeZH8yUqdcw",
    authDomain: "notepad-server.firebaseapp.com",
    databaseURL: "https://notepad-server.firebaseio.com",
    projectId: "notepad-server",
    storageBucket: "notepad-server.appspot.com",
    messagingSenderId: "850518781900",
    appId: "1:850518781900:web:3a427cf806c2b6559df769"
  };

let app = null

if(!firebase.app.length){
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase