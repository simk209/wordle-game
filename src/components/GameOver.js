import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, setGameOver, currAttempt, correctWord} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>
            {gameOver.guessedWord? "You got it chief": "Better luck next time"}
            <h1>Correct: {correctWord} </h1>
            {gameOver.guessedWord && (<h3> You guessed it in {currAttempt.attempt} tries </h3>)}
        </h3>
    </div>
  )
}

export default GameOver