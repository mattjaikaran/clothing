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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

//trigger google auth pop up
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
