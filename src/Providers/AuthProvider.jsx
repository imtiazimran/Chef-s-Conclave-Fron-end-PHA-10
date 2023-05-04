import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleAuthentication = new GoogleAuthProvider()
const githubAuthentication = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(false)

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

    const AuthInfo = {
        user,
        createUser,
        signIn,
        googleSingIn,
        githubSingIn,
        logOut,
        isLoading

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;