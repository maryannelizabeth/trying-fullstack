import React, { useState } from 'react'

function RollThreeDice() {
  let [img1Src, setImg1Src] = useState(`./images/dice2.png`)
  let randomNumber1 = Math.floor(Math.random() * 6) + 1
  let [img2Src, setImg2Src] = useState(`./images/dice4.png`)
  let randomNumber2 = Math.floor(Math.random() * 6) + 1
  let [img3Src, setImg3Src] = useState(`./images/dice4.png`)
  let randomNumber3 = Math.floor(Math.random() * 6) + 1
  return (
    <>
      <div className="dicePage">
        <div className="diceHeading"></div>
        <div className="diceRolling">
          <img className="diceOne" src={img1Src} alt="dice" />
          <img className="diceOne" src={img2Src} alt="dice" />
          <img className="diceOne" src={img3Src} alt="dice" />
        </div>{' '}
      </div>{' '}
      <div className="rollDiceButtonDiv">
        {' '}
        <button
          className="rollDiceButton"
          onClick={() => {
            setImg1Src('./images/dice' + randomNumber1 + '.png')
            console.log(img1Src)
            setImg2Src('./images/dice' + randomNumber2 + '.png')
            console.log(img2Src)
            setImg3Src('./images/dice' + randomNumber3 + '.png')
            console.log(img3Src)
          }}
        >
          Roll Dice!
        </button>
      </div>
    </>
  )
}

export default RollThreeDice
