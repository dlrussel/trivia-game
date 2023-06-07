import { useState } from "react";
import questions from "../data/questions.js";

export default function Quiz() {
  const [count, setCount] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(getRandomQuestion());
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
  }

  function handleSubmitAnswer(answer: string) {
    if (answer === question.correctAnswer) {
      setScore(score + 1);
      setCorrectAnswer(true);
    } else {
      setIncorrectAnswer(true);
    }
    setAnswerSubmitted(true);
  }

  function handleNextQuestion() {
    setCount(count + 1);
    setCorrectAnswer(false);
    setIncorrectAnswer(false);
    setQuestion(getRandomQuestion());
    setAnswerSubmitted(false);
  }
  return (
    <div>
      <h2>Question {count}/10</h2>

      <h2>{question.question}</h2>
      <ul className="answers">
        {question.answers.map((answer) => (
          <li key={answer}>
            <button
              className="answer"
              onClick={() => handleSubmitAnswer(answer)}
              disabled={answerSubmitted}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>

      {correctAnswer && <p>Correct!</p>}
      {incorrectAnswer && (
        <p>Incorrect! The correct answer was {question.correctAnswer}</p>
      )}
      <h3>Score: {score}/10</h3>
      {answerSubmitted && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
}
