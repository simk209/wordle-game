import React, {useContext}  from 'react'
import {AppContext} from '../App'

function Letter({letterPos, attemptVal}) {
  const { board, correctWord, currAttempt } = useContext(AppContext)
  const letter = board[attemptVal][letterPos]

  console.log('current attempt', currAttempt.attempt)
  console.log(attemptVal)

  const correct = correctWord.toUpperCase()[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error")

  return (
    <div className = 'letter' id = {letterState}> {letter} </div>
  )
}

export default Letter