import { useState } from "react";
import { Difficulty, fechQuizQuestions, QuestionState } from "./components/API";
import QuiestionCard from "./components/QuiestionCard"
const TOTAL_QUESTIONS = 10

type AnsewerObject={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string

}
function App() {
console.log(fechQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY));





const [loading,setLoading]=useState(false)
const [questions,setQuestions]=useState<QuestionState[]>([])
const[number,setNumber]=useState(0)
const[userAnswers,setUserAnswers]=useState< AnsewerObject[ ]>([])
const[score,setScore]=useState(0)
const[gameOver,setGAmeOver]=useState(true)


console.log(questions); 


  const startTrivia = async()=>{
    setLoading(true)
setGAmeOver(false)
const newQestions = await fechQuizQuestions(
  TOTAL_QUESTIONS,
  Difficulty.EASY
)
setQuestions(newQestions)
setScore(0)
setUserAnswers([])
setNumber(0)
setLoading(false)
  }
  const checkAnswer =(e: React.MouseEvent<HTMLButtonElement>)=>{
    if(!gameOver){
      // userAnsers
      const answer = e.currentTarget.value;
      // check answer against

    }

  }
  const nextQuestions = ()=>{

  }
  return (
    <div className="App">


      <h1>React QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS?(
        <button className="start" onClick={startTrivia}>start</button>):null}
      {gameOver?<p className="score">score:</p>:null}
      {loading && <p>Loading questions...</p>}
      {!loading && !gameOver &&(
      <QuiestionCard
      questionNr={number+1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answer={questions[number].answer}
      userAnswer={userAnswers?userAnswers[number]:undefined}
      callback={checkAnswer}
      />
      )}
      {
        !loading && !gameOver && userAnswers.length +1 && number !== TOTAL_QUESTIONS -1 ?(<button className="next" onClick={nextQuestions}>Next Question</button>)
      :null}
      
    </div>
  );
}

export default App;
