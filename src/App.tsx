import { useEffect, useState } from "react";
import { Difficulty, fechQuizQuestions, QuestionState } from "./API";
// style
import { GlobalStyle, Wrapper } from "./App.style";
import QuiestionCard from "./components/QuiestionCard";

// type
export type AnsewerObject={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string
  
}
// 10 questions
const TOTAL_QUESTIONS = 10

const  App:React.FC=()=> {
  
  // console.log(fechQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY));
  
  
  
  
  // loading for
  const [loading,setLoading]=useState(false)
  const [questions,setQuestions]=useState<QuestionState[]>([])
  const[number,setNumber]=useState(0)
  const[userAnswers,setUserAnswers]=useState< AnsewerObject[]>([])
  const[score,setScore]=useState(0)
  const[gameOver,setGAmeOver]=useState(true)
  
  
  
  
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
    
    const checkAnswer =(e:any)=>{
      if(!gameOver){
        // userAnsers
        const answer = e.currentTarget.value;
        // check answer against correct value
        const correct =questions[number].correct_answer ===answer 
        //add score if answer is correct 
        if(correct) setScore(prev =>prev+1)
        // save answer in the array for userAnswers
        const answerObject={
          question:questions[number].question,
          // we use es6 so we can write answer Instead answer :answer
          answer,
          correct, 
          correctAnswer:questions[number].correct_answer
        }
        setUserAnswers(prev =>[...prev,answerObject])
        
      }}
      const nextQuestions = ()=>{
        //monve on to next questions if not the last questions 
        const nextQuestions = number+1
        if(nextQuestions===TOTAL_QUESTIONS){
          setGAmeOver(true)
        }else{
          setNumber(nextQuestions)
        }
      }
      useEffect(()=>{
      
      fetch("http://opentdb.com/api.php? amount=10").then((g)=>g.json()).then((f)=>console.log(f)
      )
      
    },[])
    
    return (
      <>
    <Wrapper >


      <h1>React QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS?(
        <button className="start" onClick={startTrivia}>start</button>):null}
      {gameOver?<p className="score">score:{score}</p>:null}
      {loading && <p>Loading questions...</p>}
      {!loading && !gameOver &&(
        <QuiestionCard
        questionNr={number+1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswers?userAnswers[number]:undefined}
        callback={checkAnswer}
        />
        )}
      {
        !loading && !gameOver && userAnswers.length === number+1 && number !== TOTAL_QUESTIONS -1 ?(<button className="next" onClick={nextQuestions}>Next Question</button>)
        :null}
      
    </Wrapper>
    <GlobalStyle/>

    </>
  );
}

export default App;
