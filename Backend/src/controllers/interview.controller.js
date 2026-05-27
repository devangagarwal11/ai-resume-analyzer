const interviewReportModel=require("../models/interviewReport.model")
const pdfParse=require("pdf-parse")
const {generateInterviewReport,generateResumePdf}=require("../services/ai.service")

async function generateInterviewReportController(req,res){
    const resumeFile=req.file

    const resumeContent=await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()

    const {selfDescription,jobDescription}=req.body

    const ai_response=await generateInterviewReport({resume:resumeContent.text,selfDescription,jobDescription})

    const interviewReport=await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...ai_response
    })

    res.status(201).json({
        "message": "Interview report gen successfully",
        interviewReport
    })
}

async function getInterviewReportController(req,res){
    const {interviewId}= req.params

    const interviewReport=await interviewReportModel.findOne({_id:interviewId,user:req.user.id})

    if(!interviewReport){
        return res.status(404).json({
            message: "Interview report not found"
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully",
        interviewReport
    })
}

async function getInterviewReportOfLoginUserController(req,res){

    const interviewReports=await interviewReportModel.find({user:req.user.id}).sort({createdAt: -1}).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preprationPlan")

    //we just need titles
    res.status(200).json({
        message: "Interview report fetched successfully",
        interviewReports
    })
}

async function generateResumePdfController(req,res){
    const {interviewReportId}=req.params

    const interviewReport = await interviewReportModel.findById(interviewReportId)

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    const { resume, jobDescription, selfDescription } = interviewReport

    const pdfBuffer = await generateResumePdf({ resume, jobDescription, selfDescription })

    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`
    })

    res.send(pdfBuffer)
}

module.exports={generateInterviewReportController,getInterviewReportController,getInterviewReportOfLoginUserController,generateResumePdfController}