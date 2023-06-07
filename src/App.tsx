import { useState } from "react";
import "./App.css";
import questions from "./data/questions.js";

function App() {
  const [count, setCount] = useState(1);
  const [correctAnswerVisible, setCorrectAnswerVisible] = useState(false);
  const [incorrectAnswerVisible, setIncorrectAnswerVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(getRandomQuestion());

  function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
  }

  function handleSubmitAnswer(answer: string) {
    return function () {
      setCount(count + 1);
      if (answer === question.correctAnswer) {
        setScore(score + 1);
        setCorrectAnswerVisible(true);
      } else {
        setIncorrectAnswerVisible(true);
      }

      // add a delay before showing the next question
      setTimeout(() => {
        setCorrectAnswerVisible(false);
        setIncorrectAnswerVisible(false);
        setQuestion(getRandomQuestion());
      }, 1500);
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
      {correctAnswerVisible && <p>Correct!</p>}
      {incorrectAnswerVisible && <p>Incorrect!</p>}
      <h3>Score: {score}/10</h3>
    </div>
  );
}

export default App;
