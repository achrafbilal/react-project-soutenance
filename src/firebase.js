import * as firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDhBUj0pa9HrZ_V18Yhu65FWpzfYwBlOz0",
    authDomain: "server-soutenance.firebaseapp.com",
    projectId: "server-soutenance",
    storageBucket: "server-soutenance.appspot.com",
    messagingSenderId: "519811468495",
    appId: "1:519811468495:web:6c9d81a7c5366260b03bba"
};

const app = firebase.default.initializeApp(firebaseConfig)

export default app