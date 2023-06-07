import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  const [gameActive, setGameActive] = useState(false);

  return (
    <div>
      <h1>Canadian Trivia</h1>
      {gameActive && <Quiz />}
      {!gameActive && (
        <button onClick={() => setGameActive(true)}>Start Game</button>
      )}
    </div>
  );
}

export default App;
