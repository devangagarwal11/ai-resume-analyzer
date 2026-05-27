const app=require("./src/app")
require("dotenv").config()
const connectToDB=require("./src/config/database")

// const {jobDescription,resume,selfDescription}=require("./src/services/temp")
// const {generateResumePdf}=require("./src/services/ai.service")

// console.log(generateResumePdf({resume,selfDescription,jobDescription}))

connectToDB()


PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})