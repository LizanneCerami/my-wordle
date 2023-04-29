
import Key from './Key';
import { useEffect, useContext, useCallback } from 'react';
import { AppContext } from '../App';


const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
const keys2 = ["A","S","D","F","G","H","J","K","L"];
const keys3 = ["Z","X","C","V","B","N","M"];

export default function Keyboard() {
  const { 
    onEnter, 
    onDelete, 
    onSelectLetter, 
    disabledLetters, 
    correctLetters, 
    almostLetters,
    gameOver,
    currentAttempt,
  } = useContext(AppContext)

  const handleKeyboard = useCallback((event) => {
    if(gameOver.gameOver) return;
    if(event.key === "Enter") {
      onEnter()
    } else if (event.key === "Backspace") {
      onDelete()
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key)
        }
      })
    }
  },
    [currentAttempt]
  )


  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)

    return () => {
      document.removeEventListener("keydown", handleKeyboard)

    }
  }, [handleKeyboard])

  console.log(disabledLetters)
  return (
    <section sm={12}>
      <div className="keyboard" onKeyDown={handleKeyboard}>
        <div className='line1'>{keys1.map((key) => {
          return <Key 
            keyVal={key} 
            correct={correctLetters.includes(key)}
            almost={almostLetters.includes(key)}
            disabled={disabledLetters.includes(key)} />
        })}
        </div>

        <div className='line2'>{keys2.map((key) => {
          return <Key 
            keyVal={key} 
            correct={correctLetters.includes(key)}
            almost={almostLetters.includes(key)}
            disabled={disabledLetters.includes(key)} />
        })}
        </div>

        <div className='line3'>
          <Key 
            keyVal={"ENTER"} 
            bigKey />
          {keys3.map((key) => {
          return <Key 
            keyVal={key}
            correct={correctLetters.includes(key)}
            almost={almostLetters.includes(key)}
            disabled={disabledLetters.includes(key)} />
        })} 
          <Key 
            keyVal={"DELETE"} 
            bigKey />
        </div>
        

      </div>
    </section>
  )
}
