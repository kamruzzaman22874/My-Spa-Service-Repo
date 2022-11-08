import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const userCreateSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }
    const googleSignIn = () => { 
        return signInWithPopup(auth, googleProvider);
    }

  	const logOut = () => {
			// setLoading(true);
			return signOut(auth);
    };
    const userprofile = (name, photoURL) => {
			return updateProfile(auth.currentUser, {
				displayName: name,
				photoURL: photoURL,
			});
		};


    const authInfo = {
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
					// setLoading(false);
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