import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDD-4B4UqlBkzyc9CaAT6oThHU5i-9qSZ0",
    authDomain: "food-delivery-app-ad153.firebaseapp.com",
    databaseURL: "https://food-delivery-app-ad153-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-ad153",
    storageBucket: "food-delivery-app-ad153.appspot.com",
    messagingSenderId: "527525718482",
    appId: "1:527525718482:web:cc2165c304ccaddaee400b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)

const storage = getStorage(app)

export { app, firestore, storage };