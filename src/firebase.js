import firebase from 'firebase';
import 'firebase/messaging'
const firebaseConfig = {
    apiKey: "AIzaSyCNCLCPZpiX3ukjZKhItXljnB_Zg2UofzM",
    authDomain: "expense-tracker-f2b89.firebaseapp.com",
    databaseURL: "https://expense-tracker-f2b89.firebaseio.com",
    projectId: "expense-tracker-f2b89",
    storageBucket: "expense-tracker-f2b89.appspot.com",
    messagingSenderId: "38817610089",
    appId: "1:38817610089:web:10bf5392641694e8fd65f8",
    measurementId: "G-RJCDMD15Q0"
};

firebase.initializeApp(firebaseConfig);



export default firebase;