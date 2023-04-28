import { createContext, useState, useEffect } from 'react'
import { boardDefault, generateWordSet } from './components/Words';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0})
  const [ wordSet, setWordSet ] = useState

  const correctWord = "RIGHT"

  useEffect (() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currentAttempt.letterPos > 4) return;
      const newBoard = [...board]
      newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
      setBoard(newBoard)
      setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1})
    }

  const onDelete = () => {
    if(currentAttempt.letterPos === 0) return
      const newBoard = [...board]
      newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = ""
      setBoard(newBoard)
      setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1})
    }

    
    
    const onEnter = () => {
      if(currentAttempt.letterPos !== 5) return;
      
      let currentWord = " ";
      for (let i= 0; i < 5; i++) {
        currentWord += board[currentAttempt.attempt][i];
      }
      if (wordSet.has(currentWord.toLowerCase)) {
        setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0})
      } else {
        alert( "Word not found" )
      }
    } 

  return (
    <div className="App">
      <nav>
        <h1> Wordle </h1>
      </nav>
      <AppContext.Provider 
        value={{
          board,
          setBoard, 
          currentAttempt, 
          setCurrentAttempt, 
          onSelectLetter, 
          onDelete, 
          onEnter,
          correctWord,
        }}>

        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
