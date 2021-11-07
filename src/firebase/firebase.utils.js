import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAR2FIBIVbCJSJ5QFv7tLatFw6l-V82zRM",
    authDomain: "crwn-db-3e695.firebaseapp.com",
    projectId: "crwn-db-3e695",
    storageBucket: "crwn-db-3e695.appspot.com",
    messagingSenderId: "537638442280",
    appId: "1:537638442280:web:941915e1f6612f7c052c1d"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

export const signInWithGoogle = async () => {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}


export default app;
