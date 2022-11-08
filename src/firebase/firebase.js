// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD_wna6Ut9hRoBaKfiiDlqJVT6ZKKhqPw4',
	authDomain: 'assignment11-spa.firebaseapp.com',
	projectId: 'assignment11-spa',
	storageBucket: 'assignment11-spa.appspot.com',
	messagingSenderId: '255535087663',
	appId: '1:255535087663:web:56c2ecd3e8d5e8c9c206da',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;