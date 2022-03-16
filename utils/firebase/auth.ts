import firebaseApp from "./firebase";
import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export function signIn(): void {
  const auth = getAuth(firebaseApp);
  signInWithPopup(auth, provider);
}

export function signOut(): Promise<void> {
  return new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp);
    firebaseSignOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}