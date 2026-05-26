const app=require("./src/app")
require("dotenv").config()
const connectToDB=require("./src/config/database")

connectToDB()


PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})