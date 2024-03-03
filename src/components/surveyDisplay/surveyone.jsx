
import React, { useState, useCallback } from "react";
import 'survey-core/defaultV2.min.css';
import Mysurvey from "../surveyTypes/surveytypeone";


const SurveyOne = ()=> {
    const[showPage, setShowPage]=useState(true);
    const onCompletePage = useCallback((data)=>{
        console.log(data);
        setShowPage(!showPage)
    }, [showPage])
    const setFinalPage = ()=> {
        return(
            <main>
                <h1>Thank you for taking survey one</h1>
            </main>
        )
    }
    return(
        <div >
            {
                showPage?
                <Mysurvey showCompletedPage={data=>onCompletePage(data)} />:
                setFinalPage
            }
        </div>
    )

}
export default SurveyOne;