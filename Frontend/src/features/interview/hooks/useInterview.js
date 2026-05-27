import {InterviewContext} from "../interview.context"
import { useContext,useEffect } from "react"
import {generateInterviewReport,getAllInterviewReports,getInterviewReportById} from "../services/interview.api"
import { useParams } from "react-router"

export const useInteriew=()=>{
    const context=useContext(InterviewContext)

    if(!context){
        //means we are using hook outside provider in all other cases we will definitely get context info
        throw new Error("useInterview must be used within and InterviewProvider")
    }

    const {loading,setLoading,report,setReport,reports,setReports}=context

    const generateReport=async({jobDescription,selfDescription,resumeFile})=>{
        setLoading(true)
        let response=null
        try {
            response = await generateInterviewReport({jobDescription,selfDescription,resumeFile})
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }

        return response.interviewReport
    }

    const getReportById=async(interviewId)=>{
        setLoading(true)
        let response=null
        try {
            response=await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }

        return response.interviewReport
    }

    const getReports=async()=>{
        setLoading(true)
        let response=null
        try {
            response=await getAllInterviewReports()
            console.log("hello"+response)
            if(response) 
            return setReports(response.interviewReports)
            else 
            return setReports([])
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }

        if(response) 
            return response.interviewReports 
        else 
            return []
    }

    const { interviewId } = useParams()

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
        }
        else{
            getReports()
        }
    }, [ interviewId ])

    return {loading,report,reports,generateReport,getReportById,getReports}
}