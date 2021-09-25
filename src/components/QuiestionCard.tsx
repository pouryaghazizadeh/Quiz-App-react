import React from 'react'

type props = {
     question: string;
    answer:string[];
    callback:any;
    userAnswer:any;
    questionNr:number;
    totalQuestions:number
}


const QuiestionCard:React.FC<props> =({question,answer,callback,userAnswer,questionNr,totalQuestions})=> {
    return (
        <div>
            <p className="number">
                {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}}></p>
            <div> 
                {answer.map((answer)=>{
                    <div key = {answer}>
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:answer}}/>
                        </button>
                    </div>
                     
                })}
            </div>


            
        </div> 
    )
}

export default QuiestionCard
