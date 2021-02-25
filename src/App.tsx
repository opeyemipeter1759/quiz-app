import React, {useState} from 'react';
import {fetchQuizQuestions} from './Api'
// components
 import QuestionCard from './components/QuestionCard';
// types
import {QuestionState, Difficulty} from './Api';

type AnswerObject = {
  question : string;
  answer: string;
  correct: boolean;
  correctAnswer : string;
}

const TOTAL_QUESTIONS = 10;


function App() {
const [loading, setLoading] =useState(false);
const [questions, setQuestions] = useState<QuestionState[]>([]);
const [number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState([]);
const [ score , setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);

console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
const startTriv = async () => {
  setLoading(true)
  setGameOver(false)

  const newQuestions = await fetchQuizQuestions (
    TOTAL_QUESTIONS,
    Difficulty.EASY
  );
  setQuestions(newQuestions);
  setScore(0)
  setUserAnswers([]);
  setNumber(0)
  setLoading(false)
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
    question={questions[number].question}
    answers ={questions[number].answers}
    userAnswer={userAnswers?userAnswers[number]:undefined}
    callback={checkAnswer}
    />  */}
    <button className="next" onClick={newQuestion}>
    Next Question
    </button>
    </div>
  );
}

export default App;
