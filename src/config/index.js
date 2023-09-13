import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyA9T2cDKbaH7Da6AOEoQKDa9jcoczUNauc",
  authDomain: "controle-financeiro-47730.firebaseapp.com",
  projectId: "controle-financeiro-47730",
  storageBucket: "controle-financeiro-47730.appspot.com",
  messagingSenderId: "250587763491",
  appId: "1:250587763491:web:d039d2b4051b508e347296"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
export const firebase_auth = initializeAuth(firebase_app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const firebase_db = getFirestore(firebase_app);