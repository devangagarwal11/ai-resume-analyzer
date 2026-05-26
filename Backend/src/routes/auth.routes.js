const express=require("express")
const {registerUserController,loginUserController,logoutUserController,getMeController}=require("../controllers/auth.controller")
const authRouter=express.Router()
const authUser = require("../middlewares/auth.middleware")



// Register user
authRouter.post("/register",registerUserController)

// Login user
authRouter.post("/login",loginUserController)

// Logout user
authRouter.get("/logout",logoutUserController)

// Get me api this api will be protected and access is private
authRouter.get("/get-me",authUser,getMeController)

module.exports=authRouter