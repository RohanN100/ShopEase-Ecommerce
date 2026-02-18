import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBAr3Yu04iE3wyZED-23k04rDbrh0Ftdrc",
  authDomain: "shopease-aut.firebaseapp.com",
  projectId: "shopease-aut",
  storageBucket: "shopease-aut.firebasestorage.app",
  messagingSenderId: "591208740713",
  appId: "1:591208740713:web:677fb5df6c351efe046ff8"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
