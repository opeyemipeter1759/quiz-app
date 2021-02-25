import React, {useState} from 'react';
import {fetchQuizQuestions} from './Api'
// components
import QuestionCard from './components/QuestionCard';
// types
import {Difficulty} from './Api';



const TOTAL_QUESTIONS = 10;


function App() {
const [loading, setLoading] =useState(false);
const [questions, setQuestions] = useState([]);
const [number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState([]);
const [ score , setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);

console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
const startTriv = async () => {
  
}
const checkAnswer= async (e:React.MouseEvent<HTMLButtonElement>) => {
  
}
const newQuestion = ()=>{
  
}


  return (
    <div className="App">
     <h1>Quiz</h1>
    <button className="start" onClick={startTriv} > start</button>
    <p className="score"> Score:</p>
    <p> Loading Question...</p>
    {/* <QuestionCard
    questionNr={number+1}
    totalQuestions={TOTAL_QUESTIONS}
    questions={questions[number].question}
    answers ={questions[number].answers}
    userAnswer={userAnswers?userAnswers[number]:undefined}
    callback={checkAnswer}
    /> */}
    <button className="next" onClick={newQuestion}>
    Next Question
    </button>
    </div>
  );
}

export default App;
