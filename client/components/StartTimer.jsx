import React from 'react'

function StartTimer({ seconds, setSeconds, minutes, setMinutes }) {
  function updateCountdown() {
    if (seconds == 0) {
      seconds = 5
      setMinutes(minutes--)
    } else if (seconds != 0) {
      setSeconds(seconds--)
    }
    // minutes = seconds * 60
    // if (minutes != 0) {
    //   setMinutes(minutes--)
    // } else if (minutes == 0) {
    //   setMinutes(0)
    // }
  }
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
