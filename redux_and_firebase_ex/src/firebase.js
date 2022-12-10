// Import the functions you need from the SDKs you need
//중복되는 입포트 삭제
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClgE3D6soP-QNKmq0y7O-HPPRjXgjKIJY",
  authDomain: "sparta-react-basic-36880.firebaseapp.com",
  projectId: "sparta-react-basic-36880",
  storageBucket: "sparta-react-basic-36880.appspot.com",
  messagingSenderId: "679925149881",
  appId: "1:679925149881:web:c56896d83f621995f9eb68",
  measurementId: "G-VTF0VD37TD",
};

initializeApp(firebaseConfig);
// 파이어베이스 초기화
// const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
