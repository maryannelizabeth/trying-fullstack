import React, { useState } from 'react'

function RollOneDice() {
  let [imgSrc, setImgSrc] = useState(`./images/dice6.png`)
  let randomNumber1 = Math.floor(Math.random() * 6) + 1
  return (
    <>
      <div className="dicePage">
        <div className="diceHeading"></div>
        <div className="diceRolling">
          <img id="dice1" className="diceOne" src={imgSrc} alt="dice" />
        </div>{' '}
      </div>{' '}
      <div className="rollDiceButtonDiv">
        {' '}
        <button
          className="rollDiceButton"
          onClick={() => {
            setImgSrc('./images/dice' + randomNumber1 + '.png')
            console.log(imgSrc)
          }}
        >
          Roll Dice!
        </button>
      </div>
    </>
  )
}

export default RollOneDice
