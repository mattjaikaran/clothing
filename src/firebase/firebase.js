import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyA9UwS0k3LiC_scCUE1C3AqlZWST61OTUM",
  authDomain: "clothing-c8c08.firebaseapp.com",
  databaseURL: "https://clothing-c8c08.firebaseio.com",
  projectId: "clothing-c8c08",
  storageBucket: "",
  messagingSenderId: "426050407407",
  appId: "1:426050407407:web:2782b6333dd132c44f441a",
  measurementId: "G-05K1EZ06NE"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

//trigger google auth pop up
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
