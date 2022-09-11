import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <div className="homepage">
      <div className="diceDiv">
        <p>
          {' '}
          <Link to="/./Dice">
            {' '}
            <img
              className="img"
              src="./images/dice.png"
              alt="dice"
              width="150px"
            />
          </Link>
          <br></br>
          <br></br>
          Roll the Dice
        </p>
      </div>

      <div className="timerDiv">
        <p>
          <Link to="/./Timer">
            <img
              className="img"
              src="./images/timer.png"
              alt="timer"
              width="150px"
            />
          </Link>
          <br></br>
          <br></br>
          Countdown Timer
        </p>
      </div>

      <div className="spinTheWheelDiv">
        <p>
          <Link to="/./SpinTheWheel">
            {' '}
            <img
              className="img"
              src="./images/wheel-of-fortune.png"
              alt="spin the wheel"
              width="150px"
            />
          </Link>
          <br></br>
          <br></br>
          Spin The Wheel!
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
