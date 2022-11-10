import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
		const [loading, setLoading] = useState(true);
	const userCreateSignup = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password)
		
    }
	const userLogin = (email, password) => {
		setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }
	const googleSignIn = () => { 
		setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
  	const logOut = () => {
			setLoading(true);
			localStorage.removeItem('spa-token')
			return signOut(auth);

    };
    const userprofile = (name, photoURL) => {
			return updateProfile(auth.currentUser, {
				displayName: name,
				photoURL: photoURL,
			});
		};


    const authInfo = {
			loading,
			user,
			userprofile,
			userCreateSignup,
			userLogin,
			googleSignIn,
			logOut,
	
		};
    
    	useEffect(() => {
				const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
					console.log('user inside auth state change', currentUser);
					setUser(currentUser);
					setLoading(false);
				});
				return () => {
					unSubscribe();
				};
        }, []);
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;