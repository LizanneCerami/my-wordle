
import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

export default function Letter({letterPos, attemptVal}) {
  const { board, correctWord, currentAttempt, disabledLetters, setDisabledLetters } = useContext(AppContext)
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter.toLowerCase()
  const almost = !correct && letter !== "" && correctWord.includes(letter.toLowerCase())
  console.log({ correctWord, letter })

  const letterState = 
    currentAttempt.attempt > attemptVal && (
      correct 
        ? "correct" 
        : almost 
          ? "almost" 
          : "error"
      )   

  useEffect(() => {

    if( letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) =>[...prev, letter])
    }
  }, [currentAttempt.attempt])


  return (
    <div className={"letter " + letterState}>
      {letter}
    </div>
  )
}
