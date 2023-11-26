/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();
    const axiosPublic=useAxiosPublic();

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    console.log('current user',currentUser);
    if(currentUser){
        // get token and store client side
        const userInfo={email: currentUser.email}
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
            if(res.data.token){
                localStorage.setItem('access Token',res.data.token)
            }
        }) 
    }
    else{
        //remove token
        localStorage.removeItem('access Token')
    }
    setLoading(false)
   })
   return()=>{
    return unsubscribe;
   }
  },[])

    const authInfo={
            user,
            loading,
            createUser,
            signIn,
            logOut,
            updateUserProfile,
            googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;