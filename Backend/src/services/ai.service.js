
// const {GoogleGenAI}=require("@google/genai")
// const {z}=require("zod")
// const {zodToJsonSchema}=require("zod-to-json-schema")

// const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEMINI_API_KEY});


// const interviewReportSchema = z.object({
//     matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
//     technicalQuestions: z.array(z.object({
//         question: z.string().describe("The technical question can be asked in the interview"),
//         intention: z.string().describe("The intention of interviewer behind asking this question"),
//         answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//     })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
//     behavioralQuestions: z.array(z.object({
//         question: z.string().describe("The technical question can be asked in the interview"),
//         intention: z.string().describe("The intention of interviewer behind asking this question"),
//         answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//     })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
//     skillGaps: z.array(z.object({
//         skill: z.string().describe("The skill which the candidate is lacking"),
//         severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
//     })).describe("List of skill gaps in the candidate's profile along with their severity"),
//     preparationPlan: z.array(z.object({
//         day: z.number().describe("The day number in the preparation plan, starting from 1"),
//         focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
//         tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
//     })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
//     title: z.string().describe("The title of the job for which the interview report is generated"),
// })

// async function generateInterviewReport({resume,selfDescription,jobDescription}){

//     const prompt = `Generate an interview report for a candidate with the following details:
//                         Resume: ${resume}
//                         Self Description: ${selfDescription}
//                         Job Description: ${jobDescription}
// `

//     const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: prompt,
//         config: {
//             responseMimeType: "application/json",
//             responseSchema: zodToJsonSchema(interviewReportSchema),
//         }
//     })

//     console.log(response.text)

//     return JSON.parse(response.text)



// }

// module.exports = generateInterviewReport




const { GoogleGenAI, Type } = require("@google/genai");
const { z } = require("zod");

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEMINI_API_KEY});

// 1. Keep your Zod schema for runtime validation before saving to your DB
const interviewReportSchema = z.object({
    // ... (Keep your original Zod schema exactly as it was) ...
});

// 2. Define the Native Gemini Schema using Type
const nativeGeminiSchema = {
    type: Type.OBJECT,
    properties: {
        matchScore: {
            type: Type.NUMBER,
            description: "A score between 0 and 100 indicating how well the candidate's profile matches the job description"
        },
        technicalQuestions: {
            type: Type.ARRAY,
            description: "Technical questions that can be asked in the interview",
            items: {
                type: Type.OBJECT,
                properties: {
                    question: { type: Type.STRING, description: "The technical question" },
                    intention: { type: Type.STRING, description: "The intention behind the question" },
                    answer: { type: Type.STRING, description: "How to answer this question" }
                },
                required: ["question", "intention", "answer"]
            }
        },
        behavioralQuestions: {
            type: Type.ARRAY,
            description: "Behavioral questions that can be asked in the interview",
            items: {
                type: Type.OBJECT,
                properties: {
                    question: { type: Type.STRING, description: "The behavioral question" },
                    intention: { type: Type.STRING, description: "The intention behind the question" },
                    answer: { type: Type.STRING, description: "How to answer this question" }
                },
                required: ["question", "intention", "answer"]
            }
        },
        skillGaps: {
            type: Type.ARRAY,
            description: "List of skill gaps in the candidate's profile",
            items: {
                type: Type.OBJECT,
                properties: {
                    skill: { type: Type.STRING, description: "The skill which the candidate is lacking" },
                    severity: { 
                        type: Type.STRING, 
                        description: "The severity of this skill gap",
                        enum: ["low", "medium", "high"] 
                    }
                },
                required: ["skill", "severity"]
            }
        },
        preparationPlan: {
            type: Type.ARRAY,
            description: "A day-wise preparation plan for the candidate",
            items: {
                type: Type.OBJECT,
                properties: {
                    day: { type: Type.NUMBER, description: "The day number" },
                    focus: { type: Type.STRING, description: "The main focus of this day" },
                    tasks: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                        description: "List of tasks to be done on this day"
                    }
                },
                required: ["day", "focus", "tasks"]
            }
        },
        title: {
            type: Type.STRING,
            description: "The title of the job for which the interview report is generated"
        }
    },
    // Enforce that the model returns every single top-level key
    required: ["matchScore", "technicalQuestions", "behavioralQuestions", "skillGaps", "preparationPlan", "title"]
};

async function generateInterviewReport({resume, selfDescription, jobDescription}){
    const prompt = `You are an expert technical recruiter and interviewer. 
Generate a comprehensive interview report for a candidate strictly in JSON format matching the provided schema. Do not include extra fields.

Candidate Details:
Resume: ${resume}
Self Description: ${selfDescription}
Job Description: ${jobDescription}`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: nativeGeminiSchema, // Pass the native schema here
            temperature: 0.1, // Keep this low to prevent hallucinated structures
        }
    });

    // 3. Parse the JSON response
    const rawData = JSON.parse(response.text);

    // console.log(response.text)

    // 4. (Optional but recommended) Validate the raw data against your Zod schema 
    // to ensure 100% type safety before sending it to MongoDB
    // const validatedData = interviewReportSchema.parse(rawData);
    
    return rawData;
}

module.exports = generateInterviewReport;