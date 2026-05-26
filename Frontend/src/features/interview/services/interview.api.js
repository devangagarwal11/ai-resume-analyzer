import axios from "axios";

const api=axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
})

export async function register ({username,email,password}) {
    try {
        const response=await api.post("/api/auth/register",{username,email,password})
        return response.data
    } catch (error) {
        console.log("Register route:" +error)
    }
}