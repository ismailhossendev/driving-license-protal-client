import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

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
        return updateProfile(auth.currentUser, info)
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
            if (result) {

                fetch(`http://localhost:5000/role/${result.email}`)
                    .then(res => res.json())
                    .then(data => {
                        result.role = data.role
                        setUser(result);
                        setLoading(false)
                    })
            } else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => unlink();
    }, [])



    const logout = () => {
        signOut(auth)
            .then(() => {
                toast.success('Successfully SignOut')
                localStorage.removeItem('token')
                Navigate('/')
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