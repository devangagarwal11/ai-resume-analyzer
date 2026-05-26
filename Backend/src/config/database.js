const mongoose=require("mongoose")

require("dotenv").config()



async function connectToDB(){
    try {
        
        await mongoose.connect(process.env.MONGO_URI)
        console.log("URI:", process.env.MONGO_URI);
        console.log("Successfully connected to DB")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectToDB