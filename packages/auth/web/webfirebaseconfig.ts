// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_AUTH_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_AUTH_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_AUTH_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_AUTH_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_AUTH_APP_ID!,
};
// console.log(firebaseConfig);
// Initialize Firebase
const authApp = initializeApp(firebaseConfig, "authApp");
export const storage = getStorage(authApp);

export const auth = getAuth(authApp);
