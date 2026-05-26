const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        unique: [true,"username already taken"],
        required: true,
    },

    email:{
        type: String,
        unique: [true,"email already exists"],
        required: true,
    },

    password:{
        type:String,
        required: true
    },
})

const userModel= mongoose.model("users",UserSchema)

module.exports=userModel