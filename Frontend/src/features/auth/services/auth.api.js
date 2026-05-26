import axios from "axios"

//create instance to avoid repetition
const api=axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})

// export async function register ({username,email,password}) {
//     try {
//         const response=await axios.post("http://localhost:8000/api/auth/register",{username,email,password},{
//             withCredentials: true //server has now access to read/write cookie
//         })

//         return response.data
//     } catch (error) {
//         console.log("Register route:" +error)
//     }
// }

export async function register ({username,email,password}) {
    try {
        const response=await api.post("/api/auth/register",{username,email,password})
        return response.data
    } catch (error) {
        console.log("Register route:" +error)
    }
}

export async function login ({email,password}) {
    try {
        const response=await api.post("/api/auth/login",{email,password})

        return response.data
    } catch (error) {
        console.log("Login route:" +error)
    }
}

export async function logout () {
    try {
        const response=await api.get("/api/auth/logout")

        return response.data
    } catch (error) {
        console.log("Logout route:" +error)
    }
}

export async function getMe () {
    try {
        const response=await api.get("/api/auth/get-me")

        return response.data
    } catch (error) {
        console.log("getMe route:" +error)
    }
}