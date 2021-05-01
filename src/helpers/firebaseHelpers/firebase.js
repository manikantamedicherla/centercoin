import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCx3-soGBQ9JZUT54Br7DqLN0xeTto3CTU",
    authDomain: "centercoin-385ee.firebaseapp.com",
    databaseURL: "https://centercoin-385ee.firebaseio.com",
    projectId: "centercoin-385ee",
    storageBucket: "centercoin-385ee.appspot.com",
    messagingSenderId: "176240836888",
    appId: "1:176240836888:web:89faf0bee4df3f88955e6d",
    measurementId: "G-EN84YM9M4C"
  };
firebase.initializeApp(firebaseConfig)
export default firebase