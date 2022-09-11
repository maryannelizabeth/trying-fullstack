import React, { Fragment } from 'react'

const TimerDisplay = (props) => {
  let minutes = props.timerMinutes
  let seconds = props.timerSeconds

  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p className="countdown">{minutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p className="countdown">{seconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  )
}

TimerDisplay.defaultProps = {
  timerMinutes: '00',
  timerSeconds: '00',
}

export default TimerDisplay
