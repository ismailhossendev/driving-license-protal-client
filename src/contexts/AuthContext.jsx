import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from 'firebase/auth'
import toast from 'react-hot-toast';

export const authContext = createContext();
const auth = getAuth(app)
const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const google = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (info) => {
        return updateCurrentUser(auth, user, info)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const withGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, google);
    }

    useEffect(() => {
        const unlink = onAuthStateChanged(auth, result => {
            setUser(result);
            setLoading(false)
        })
        return () => unlink();
    }, [])

    const logout = () => {
        signOut(auth)
            .then(() => {
                toast.success('Successfully SignOut')
            })
    }
    const value = {
        createUser,
        loginUser,
        withGoogle,
        user,
        loading,
        setLoading,
        updateUser,
        logout,
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;