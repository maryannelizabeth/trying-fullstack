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
          {/* <Link to = '/./RandomGenerator'><h3>Random Generator</h3></Link> */}
          <Link to="/./randomgenerator">
            {' '}
            <img
              className="img"
              src="./images/question.png"
              alt="spin the wheel"
              width="150px"
            />
          </Link>
          <br></br>
          <br></br>
          Random Student Generator!
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
