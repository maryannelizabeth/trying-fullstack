import React from 'react'

function StartTimer({ updateCountdown }) {
  let startClick = () => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
  }

  return (
    <div className="startCountdownButton">
      <button className="button-1" type="button" onClick={startClick}>
        Start Countdown!
      </button>
    </div>
  )
}

export default StartTimer
