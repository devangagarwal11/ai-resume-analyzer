//used to manage user state and loading state 

import { useState, createContext,useEffect } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true) // loading initially true think why

    useEffect(()=>{
        const getAndSetUser= async()=>{
            try {
                const data=await getMe()
                setUser(data.user)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
            
        }

        getAndSetUser()
    }) 

    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}