import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyDgPUdH-dlnjaa7BqKSUkVKyY3kG5_eB3k",
  
    authDomain: "nightgroove-992a3.firebaseapp.com",
  
    projectId: "nightgroove-992a3",
  
    storageBucket: "nightgroove-992a3.appspot.com",
  
    messagingSenderId: "363941909332",
  
    appId: "1:363941909332:web:7fdd987d77f35e50256ec1",
  
    measurementId: "G-PDJEL3NLSW"
  
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const signupWithEmail = async (email, password) => {
    try {
        const auth = getAuth();
        const user = await createUserWithEmailAndPassword(auth,email, password);
        await sendEmailVerification(auth.currentUser);
        const userInfo = auth.currentUser;
        const uid = userInfo.uid;
        return uid;
    } catch (error) {
        console.error(error);
        alert("メールアドレスとパスワード(5字以上)を正しく入力してください。");
        return "ERR";
    }
};

export const signinWithEmail = async (email, password) => {
    try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth,email, password);
        const userInfo = auth.currentUser;
        const uid = userInfo.uid;
        console.log(uid);
        return uid;
    } catch (error) {
        console.error(error);
        alert("パスワードまたはメールアドレスが間違っています。");
        return "ERR";
    }
};

export const signoutWithEmail = async (email, password) => {
    const auth = getAuth();
    console.log(auth.currentUser);
    await signOut(auth);
    console.log(auth.currentUser);
};

export const createFirestore = async() => {
    return await setDoc(doc(db, "cities", "LA"), "miyagoshi")
}

export const getUid = () => {
    const auth = getAuth();
    const userInfo = auth.currentUser;
    const uid = userInfo.uid;
    return uid;
}