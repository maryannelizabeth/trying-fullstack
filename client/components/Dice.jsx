import React from 'react'
import { Link } from 'react-router-dom'

function DiceHome() {
  return (
    <>
      <div className="dicePage">
        <div className="diceHeading">
          <h3>How many dice would you like to roll?</h3>
          <div className="buttonDiv">
            <Link to="/rollonedice">
              <button id="1" className="diceButton">
                One
              </button>
            </Link>
            <Link to="/rolltwodice">
              <button id="2" className="diceButton">
                Two
              </button>
            </Link>
            <Link to="/rollthreedice">
              <button id="3" className="diceButton">
                Three
              </button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default DiceHome
