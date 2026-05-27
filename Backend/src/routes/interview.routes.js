const express=require("express")
const authUser=require("../middlewares/auth.middleware")
const interviewRouter=express.Router()
const {generateInterviewReportController,getInterviewReportController,getInterviewReportOfLoginUserController,generateResumePdfController}=require("../controllers/interview.controller")
const upload=require("../middlewares/file.middleware")

//private access routes
interviewRouter.post("/",authUser,upload.single("resume"),generateInterviewReportController)

interviewRouter.post("/resume/pdf/:interviewReportId",authUser,generateResumePdfController)

interviewRouter.get("/report/:interviewId",authUser,getInterviewReportController)

interviewRouter.get("/",authUser,getInterviewReportOfLoginUserController)

module.exports=interviewRouter