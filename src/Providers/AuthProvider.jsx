import React, { createContext, useEffect, useState } from 'react';
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleAuthentication = new GoogleAuthProvider()
const githubAuthentication = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSingIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleAuthentication)
    }

    const githubSingIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubAuthentication)
    }

    const logOut = () => signOut(auth)

    const updateProfileInfo = (displayName, photoURL) => {
        setIsLoading(true)
        return updateProfile(auth.currentUser, {displayName, photoURL})
        .then(() => {
            setUser(auth.currentUser);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
    }

    useEffect(() => {
        const unMount = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => {
            return unMount()
        }
    }, [isLoading])

    const AuthInfo = {
        user,
        createUser,
        signIn,
        googleSingIn,
        githubSingIn,
        logOut,
        isLoading,
        updateProfileInfo
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;