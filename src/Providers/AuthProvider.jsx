import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext=createContext(null)
const googleprovider = new GoogleAuthProvider();
const AuthProvider = ( {children}) => {
    const[user,setuser] =useState(null)
    const [loading,setLoading]=useState(true)

    const creatuser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signInuser=(email, password)=>{
        setLoading(true)
return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleprovider)
    }

   const signOutuser=()=>{
    setLoading(true)
    return signOut(auth)
   }
      
    useEffect(()=>{

  const unSubsCribe=  onAuthStateChanged(auth,(currenruser)=>{

            console.log('currently logged user',currenruser);
            setuser(currenruser)
            setLoading(false)

    })
return ()=>{
    unSubsCribe()
}


    },[])



    const authInfu = {
      creatuser,signInuser,user,signOutuser,loading,signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfu}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;