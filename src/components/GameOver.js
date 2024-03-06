import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext)
  return (
    <div className='gameOver' id = {gameOver.guessedWord ? "correct-guess" : "wrong-guess" } >
        <div>
            <h2>{gameOver.guessedWord? "You got it chief!": "Better luck next time... "}</h2>
            <h1>Correct Word: {correctWord.toUpperCase()} </h1>
            {gameOver.guessedWord && (<h2> You guessed it in {currAttempt.attempt} tries </h2>)}
        </div>
    </div>
  )
}

export default GameOver