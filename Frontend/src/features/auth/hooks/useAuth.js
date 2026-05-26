import { useContext } from "react";
import { AuthContext } from "../auth.context";
import {login,getMe,logout,register} from "../services/auth.api"

//hooks manage state layes and api layer comm

export const useAuth=()=>{
    const context=useContext(AuthContext)

    const {user,setUser,loading,setLoading}=context

    const handleLogin=async({email,password})=>{
        setLoading(true)
        try {
            const data=await login({email,password})
            setUser(data.user)
        } catch (error) {
            console.log(error)
        }finally{
        setLoading(false)
        }
    }

    const handleRegister=async({username,email,password})=>{
        setLoading(true)
        try {
            const data=await register({username,email,password})
            setUser(data.user)
        } catch (error) {
            console.log(error)
        }
        finally{
        setLoading(false)
        }
    }

    const handleLogout=async()=>{
        setLoading(true)
        try {
            const data=await logout()
            setUser(null)
        } catch (error) {
            console.log(error)
        }
        finally{
        setLoading(false)
        }
    }

    // const handleGetme=async()=>{
    //     setLoading(true)
    //     const data=await getMe()
    //     setUser(data.user)
    //     setLoading(false)
    // }

    return {user,loading,handleLogin,handleLogout,handleRegister}
}