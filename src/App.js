import './App.css';
import Board from './components/Board';
import { boardDefault, generateWordSet } from './Words'
import Keyboard from './components/Keyboard';
import {createContext, useEffect, useState} from 'react'

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  // below is letter coordinates 
  const [currAttempt, setCurrAttempt] = useState({attempt:0,letterPos:0,})
  const [wordSet, setWordSet] = useState(new Set())
  // wrong letters
  const [disabledLetters,setDisabledLetters] = useState([])

  const correctWord = "RIGHT"
  useEffect(()=>{
    generateWordSet().then(wordsObj=>{
      setWordSet(wordsObj.wordSet)
    })
  },[])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return
      
      const newBoard = [...board]
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
      setBoard(newBoard)
      setCurrAttempt(
        {
          ...currAttempt,
          letterPos: currAttempt.letterPos + 1,
        })

  }
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return
      const newBoard = [...board]
      newBoard[currAttempt.attempt][currAttempt.letterPos-1] = ""
      setBoard(newBoard)

      setCurrAttempt(
        {
          ...currAttempt, 
          letterPos:currAttempt.letterPos-1
        })
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return

    let currWord = ""
    for (let i = 0; i < 5; i++){
      currWord += board[currAttempt.attempt][i]
    }

    if (wordSet.has(currWord.toLowerCase())){
            setCurrAttempt({
              attempt: currAttempt.attempt + 1,
              letterPos: 0,
            })
    }
    else {
      alert("Word Does Not Exist in Word Bank")
    }
    if (currWord.toLowerCase() === correctWord.toLowerCase()) alert('Winner Winner Chicken Dinner')
  }


  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currAttempt,setCurrAttempt, onDelete,onEnter,onSelectLetter, correctWord, disabledLetters,setDisabledLetters, }}>
        <div className='game'>

        <Board />
        <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
