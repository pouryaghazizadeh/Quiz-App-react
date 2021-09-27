
import React from 'react'
// types
import { AnsewerObject } from "../App"
// style
import { ButtonWrapper, Wrapper } from "./QuiestionCard.style"
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
            Question:  {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}/>
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
