import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <div className="homepage">
      <h1>Home</h1>
      <Link to = '/./RandomGenerator'><h3>Random Generator</h3></Link>
      {/* <div className="diceDiv">
       <p>
          {' '}
        <Link to="/./Dice">
            {' '}
            <img */}
      {/* //           className="img"
    //           src="./images/dice.png"
    //           alt="dice"
    //           width="150px"
    //         />
    //       </Link>
    //       <br></br>
    //       <br></br>
    //       Roll the Dice
    //     </p>
    //   </div> */}

      {/* //   <div className="timerDiv">
    //     <p>
    //       <Link to="/./Timer">
    //         <img
    //           className="img"
    //           src="./images/timer.png"
    //           alt="timer"
    //           width="150px"
    //         />
    //       </Link>
    //       <br></br>
    //       <br></br>
    //       Countdown Timer
    //     </p>
    //   </div>

    //   <div className="spinTheWheelDiv">
    //     <p>
    //       <Link to="/./randomgenerator">
    //         {' '}
    //         <img
    //           className="img"
    //           src="./images/wheel-of-fortune.png"
    //           alt="spin the wheel"
    //           width="150px"
    //         />
    //       </Link>
    //       <br></br>
    //       <br></br>
    //       Spin The Wheel!
    //     </p>
    //   </div> */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
