import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
   
    apiKey: "AIzaSyD9s4BJPhH3t01yL7gb0YBlHpJfpASemgI",
    authDomain: "fir-auth-react-native-d70fc.firebaseapp.com",
    projectId: "fir-auth-react-native-d70fc",
    storageBucket: "fir-auth-react-native-d70fc.appspot.com",
    messagingSenderId: "1071837887563",
    appId: "1:1071837887563:web:ee3d8d0095a348955ea1ce",
    measurementId: "G-3TMZV94NZ2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export async function SignUpPage(userInfo) {
    try {
        const { email, password, first, last, country } = userInfo;

        await createUserWithEmailAndPassword(auth, email, password);

        await addDoc(collection(db, "DriverUsers"), {
            email,
            password,
            first,
            last,
            country
        });

        alert("Registration successful!");
        return true;

    } catch (e) {
        alert(e.message);
        throw e;
    }
}

export async function signIn(useInfo) {
    try {

        const { email, password } = useInfo
        await signInWithEmailAndPassword(auth, email, password)

        alert("You Are Logged In Successfull")
        return true;
    } catch (e) {
        alert(e.message)
        throw e;
    }
}