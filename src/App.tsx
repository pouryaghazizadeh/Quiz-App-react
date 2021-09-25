import { useState } from "react"
//components
import QuiestionCard from "./components/QuiestionCard"

import { fechQuizQuestions } from "./components/API"
// types
import {QuestionState , Difficulty } from "./components/API"
const TOTAL_QUESTIONS = 10

type AnsewerObject={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string

}
function App() {
console.log(fechQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY));



 
 
  const [loading,setLoadin]=useState(false)
  const [questions,setQuestions]=useState<QuestionState[]>([])
  const[number,setNumber]=useState(0)
  const[userAnswers,setUserAnswers]=useState([])
  const[score,setScore]=useState(0)
  const[gameOver,setGAmeOver]=useState(true)




  const startTrivia = async()=>{

  }
  const checkAnswer =(e: React.MouseEvent<HTMLButtonElement>)=>{

  }
  const nextQuestions = ()=>{

  }
  return (
    <div className="App">


      <h1>React QUIZ</h1>
      <button className="start" onClick={startTrivia}>start</button>
      <p className="score">score:</p>
      <p>Loading questions...</p>
      {/* <QuiestionCard
      questionNr={number+1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answer={questions[number].answers}
      userAnswers={userAnswers?userAnswers[number]:undefined}
      callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestions}>Next Question</button>
    </div>
  );
}

export default App;
