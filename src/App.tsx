import { useState } from "react";
import "./App.css";
import questions from "./data/questions.js";

function App() {
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(getRandomQuestion());

  function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
  }

  function correctAnswer() {
    console.log("Correct!");
    return true;
  }

  function handleSubmitAnswer(answer: string) {
    return function () {
      setCount(count + 1);
      if (answer === question.correctAnswer) {
        correctAnswer();
        setScore(score + 1);
      } else {
        console.log("Incorrect!");
      }
      setQuestion(getRandomQuestion());
    };
  }

  return (
    <div>
      <h1>Canadian Trivia</h1>
      <h2>Question {count}</h2>

      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer) => (
          <li
            key={answer}
            className="answer"
            onClick={handleSubmitAnswer(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
      <h3>Score: {score}/10</h3>
    </div>
  );
}

export default App;
