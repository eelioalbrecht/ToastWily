import * as firebase from 'firebase'
require('@firebase/firestore')

  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();


  