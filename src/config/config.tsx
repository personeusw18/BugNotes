import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCH97BRUWDl6Y0NP5uRZ02KVrkJ82OWVRM",
    authDomain: "bug-notes.firebaseapp.com",
    databaseURL:"https://bug-notes.firebaseio.com",
    projectId:"bug-notes",
    storageBucket:"bug-notes.appspot.com",
    messagingSenderId:"111317482332",
    appId:"1:111317482332:web:82502be0183fa13bb9df99",
    measurementId:"G-E236SGHPDV",
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
