import React, { useState } from 'react'
import ClockShown from './ClockShown'

function Clock() {
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval
  const startTimer = () => {
    const countDownDate = new Date().getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
    })
  }

  return (
    <div>
      <ClockShown
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  )
}

export default Clock
