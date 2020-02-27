import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3e6t1e4D6ebVMyqBRJ-GqwOC0leeC2NE",
  authDomain: "catch-of-the-day-bc613.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-bc613.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

//this is a default export
export default base;