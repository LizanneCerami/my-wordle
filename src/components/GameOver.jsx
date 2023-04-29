import { useContext } from "react";
import { AppContext } from "../App.js";

export default function GameOver(AppContext) {
const { gameOver, correctWord, currentAttempt, onSelectLetter, onDelete } = useContext(AppContext)

  return (
    <div className="gameOver ">
      <h3>{gameOver.guessedWord 
        ? "You Correctly Guessed" 
        : "You Failed"} 
      </h3>

      <h3> Correct: {correctWord} </h3>
      {gameOver.guessedWord && (<h3> You guessed in {currentAttempt.attempt} attempts</h3>)}
    </div>
  )
}
