import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  getDoc,
  updateDoc,
  doc,
  collection,
  runTransaction,
  query,
  orderBy,
  limit,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgPUdH-dlnjaa7BqKSUkVKyY3kG5_eB3k",

  authDomain: "nightgroove-992a3.firebaseapp.com",

  projectId: "nightgroove-992a3",

  storageBucket: "nightgroove-992a3.appspot.com",

  messagingSenderId: "363941909332",

  appId: "1:363941909332:web:67d3fd46acc46d20256ec1",

  measurementId: "G-SC6E2004C8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const signupWithEmail = async (email, password) => {
  try {
    const auth = getAuth();
    const user = await createUserWithEmailAndPassword(auth, email, password);
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
    const user = await signInWithEmailAndPassword(auth, email, password);
    const userInfo = auth.currentUser;
    const uid = userInfo.uid;
    return uid;
  } catch (error) {
    console.error(error);
    alert("パスワードまたはメールアドレスが間違っています。");
    return "ERR";
  }
};

export const signoutWithEmail = async (email, password) => {
  const auth = getAuth();
  await signOut(auth);
};

export const createFirestore = async () => {
  return await setDoc(doc(db, "cities", "LA"), "miyagoshi");
};

export const getUid = () => {
  const auth = getAuth();
  const userInfo = auth.currentUser;
  const uid = userInfo.uid;
  return uid;
};

export const addTetuyaDay = async (name) => {
  const uid = getUid();
  const userRef = collection(db, "Users");
  const loginIDRef = doc(userRef, uid);
  const AllNightLibraryRef = doc(collection(loginIDRef, "AllNightState"), name);
  await runTransaction(db, async (transaction) => {
    const docSnapshot = await transaction.get(AllNightLibraryRef);
    if (!docSnapshot.exists()) {
      transaction.set(AllNightLibraryRef, {
        timestamp: Timestamp.now(),
      });
    }
  });
};

//何時に徹夜動画を撮ったかを記録する
export const addDanceVideo = async (docName, fileName) => {
  const uid = getUid();
  const userRef = collection(db, "Users");
  const loginIDRef = doc(userRef, uid);
  const AllNightLibraryRef = collection(loginIDRef, "AllNightState");
  const DanceVideoRef = doc(AllNightLibraryRef, docName);
  // ドキュメントを取得
  const danceVideoSnapshot = await getDoc(DanceVideoRef);
  // ドキュメントのデータを取得
  const danceVideoData = danceVideoSnapshot.data();
  // フィールドの数を取得
  const danceVideoFieldCount = Object.keys(danceVideoData).length;

  //フィールドの追加
  await updateDoc(DanceVideoRef, {
    ["video" + (danceVideoFieldCount + 1)]: fileName,
  });
};

export const getLastUpdatedDocument = async (url) => {
  const uid = getUid();
  const userRef = collection(db, "Users");
  const loginIDRef = doc(userRef, uid);
  const AllNightLibraryRef = collection(loginIDRef, "AllNightState");

  const q = query(AllNightLibraryRef, orderBy("timestamp", "asc"), limit(1));
  getDocs(q).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const docName = doc.id;
      addDanceVideo(docName, url);
    });
  });
};

export const getYearDoc = async (year) => {
  const collectionRef = collection(db, "Users");
  const documentRef = doc(collectionRef, getUid());
  const subcollectionRef = collection(documentRef, "AllNightState");

  const querySnapshot = await getDocs(subcollectionRef);

  const outputArray = [];

  querySnapshot.forEach((item) => {
    if (item.id.includes(year)) {
      const day = item.id;
      const movie = Object.keys(item.data())
        .filter((key) => key.startsWith("video"))
        .map((key) => item.data()[key]);

      outputArray.push({ day, movie });
    }
  });

  outputArray.sort((a, b) => (a.day > b.day ? -1 : 1));

  return outputArray;
};
