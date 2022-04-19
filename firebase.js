import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBvo5kFoHl6bJq_F9F8gxk7yIwWApzLtlI",
	authDomain: "uber-next-clone-8bc99.firebaseapp.com",
	projectId: "uber-next-clone-8bc99",
	storageBucket: "uber-next-clone-8bc99.appspot.com",
	messagingSenderId: "784692350531",
	appId: "1:784692350531:web:9fa4ec05749fcfad5b8ef6",
	measurementId: "G-G06NDV6KZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth =getAuth();

export { app, provider, auth };
