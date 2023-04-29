
import { useContext } from 'react'
import { AppContext } from '../App'

export default function Key({keyVal, bigKey, disabled, almost, correct }) {

  const { onDelete, onEnter, onSelectLetter, gameOver } = useContext(AppContext)

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if(keyVal === "ENTER"){
      onEnter()
    } else if(keyVal === "DELETE") {
      onDelete()
    } else {
      onSelectLetter(keyVal)
    }
  }
  return (
    <div className={'key ' + (bigKey ? 'big ' : '') + (almost ? 'almost ' : '') + (correct ? 'correct ' : '') + ((disabled) ? "disabled" : '')} 
        onClick={selectLetter}>
        {keyVal}
    </div>
  )
}