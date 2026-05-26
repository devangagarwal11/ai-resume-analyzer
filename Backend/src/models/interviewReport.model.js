const mongoose=require("mongoose")


const technicalQuestionSchema=new mongoose.Schema({
    question:{
        type: String,
        required: true,
    },
    intention:{
        type: String,
        required: true,
    },
    answer:{
        type: String,
        required: true,
    },
},{_id:false})

const behaviouralQuestionSchema=new mongoose.Schema({
    question:{
        type: String,
        required: true,
    },
    intention:{
        type: String,
        required: true,
    },
    answer:{
        type: String,
        required: true,
    },
},{_id:false})

const skillGapSchema=new mongoose.Schema({
    skill:{
        type: String,
        required: true,
    },
    severity:{
        type: String,
        enum: ["low","medium","high"],
        required: true,
    }
},{_id:false})

const preprationPlanSchema=new mongoose.Schema({
    day:{
        type: Number,
        required: true,
    },
    focus:{
        type: String,
        required: true,
    },
    tasks:[{
        type: String,
        required: true,
    }],
},{_id:false})

const schema=new mongoose.Schema({
    jobDescription:{
        type:String,
        required: [true,"JD is required"]
    },
    resume:{
        type: String,
    },
    selfDescription:{
        type: String,
    },
    matchScore:{
        type:Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behaviouralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preprationPlanSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
},{timestamps: true})

const interviewReportModel=mongoose.model("interviewReport",schema)

module.exports =interviewReportModel