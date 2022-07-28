import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore' 
 const firebaseConfig = {
    apiKey: "AIzaSyBvwDKQRbyxkDfL3HHA0sZ6UAafMH_gsLk",
    authDomain: "vue-blog-system-6f1bc.firebaseapp.com",
    projectId: "vue-blog-system-6f1bc",
    storageBucket: "vue-blog-system-6f1bc.appspot.com",
    messagingSenderId: "787347195861",
    appId: "1:787347195861:web:5e1f62e9f7726b16e45f5c"
  };
  firebase.initializeApp(firebaseConfig)
  let db = firebase.firestore();
  export {db}
