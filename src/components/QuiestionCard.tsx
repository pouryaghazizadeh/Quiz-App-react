
import React from 'react'
// style
import { Wrapper, ButtonWrapper } from "./QuiestionCard.style"
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
        <Wrapper>
            <p className="number">
                {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}></p>
            <div> 
                {answers.map((answer)=>(
                    
                    <ButtonWrapper
                      key={answer}
                      correct={userAnswer?.correctAnswer === answer}
                      userClicked={userAnswer?.answer === answer}
                     >
                        {/* with !! useranswer convert to boolean */}
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:answer}}/>
                        </button>
                    </ButtonWrapper>
                    
                     
                ))}
            </div>


            
        </Wrapper> 
    )
}

export default QuiestionCard
