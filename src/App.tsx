//components
import QuiestionCard from "./components/QuiestionCard"




function App() {
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
      <QuiestionCard/>
      <button className="next" onClick={nextQuestions}>Next Question</button>
    </div>
  );
}

export default App;
