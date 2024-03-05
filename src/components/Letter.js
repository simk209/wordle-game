import React, {useContext, useEffect}  from 'react'
import {AppContext} from '../App'

function Letter({letterPos, attemptVal}) {
  const { board, correctWord, currAttempt, disabledLetters,setDisabledLetters } = useContext(AppContext)
  const letter = board[attemptVal][letterPos]

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  const correct = correctWord.toUpperCase()[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error")

  return (
    <div className = 'letter' id = {letterState}> {letter} </div>
  )
}

export default Letter