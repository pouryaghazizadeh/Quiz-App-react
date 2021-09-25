import React from 'react'
// types
import { AnsewerObject } from "../App"
type props = {
     question: string;
    answers:string[];
    callback:(e: React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer:AnsewerObject | undefined;
    questionNr:number;
    totalQuestions:number
}


const QuiestionCard:React.FC<props> =({question,answers,callback,userAnswer,questionNr,totalQuestions})=> {
    return (
        <div>
            <p className="number">
                {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}></p>
            <div> 
                {answers.map((answer)=>{
                    
                    <div key = {answer}
                    // correct={userAnswer?.correctAnswer===answer}
                    // userclicked
                    >
                        {/* with !! useranswer convert to boolean */}
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:answer}}/>
                        </button>
                    </div>
                    
                     
                })}
            </div>


            
        </div> 
    )
}

export default QuiestionCard
