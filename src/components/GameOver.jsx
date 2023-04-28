import { useContext } from "react"
import { AppContext } from "../App"

export default function GameOver(AppContext) {
const { gameOver, setGameOver, correctWord, currentAttempt } = useContext()

  return (
    <div className="gameOver ">GameOver
      <h3>{GameOver.guessedWord ? "You Correctly Guessed" : "You Failed"} </h3>
      <h3> Correct: {correctWord} </h3>
      {gameOver.guessedWord && (<h3> You guessed in {currentAttempt.attempt} attempts</h3>)}
    </div>
  )
}
