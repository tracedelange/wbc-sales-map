import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/app-check'

const apiKey = process.env.REACT_APP_APIKEY;
const authDomain = process.env.REACT_APP_AUTHDOMAIN;
const databaseURL = process.env.REACT_APP_DATABASEURL
const projectId = process.env.REACT_APP_PROJECTID
const storageBucket = process.env.REACT_APP_STORAGEBUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID
const appId = process.env.REACT_APP_APPID
const appCheck = process.env.REACT_APP_APPCHECK

const firebaseConfig = {
    apiKey: apiKey,
    authDomain:authDomain,
    databaseURL:databaseURL,
    projectId:projectId,
    storageBucket:storageBucket,
    messagingSenderId:messagingSenderId,
    appId:appId
}

firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate(appCheck, true);

// console.log('Connection established')
const database = firebase.database()

export default database;