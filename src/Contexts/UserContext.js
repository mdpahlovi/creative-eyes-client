import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../Config/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userRefetch, setUserRefetch] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const signInByFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };
    const signInByGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const signout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.uid) {
                axios.get(`/user/${currentUser?.email}`).then((res) => {
                    setUser(res.data);
                    setLoading(false);
                });
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, [userRefetch]);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        userRefetch,
        setUserRefetch,
        createUser,
        signIn,
        signInByGoogle,
        signInByFacebook,
        signInByGithub,
        signout,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
