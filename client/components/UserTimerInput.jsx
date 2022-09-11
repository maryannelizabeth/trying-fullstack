import React, { useState } from 'react'
import TimerDisplay from './TimerDisplay'
import StartTimer from './StartTimer'

function UserTimerInput() {
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  const [print, setPrint] = useState(false)

  function getMinuteInput(minuteInput) {
    setMinutes(Number(minuteInput.target.value))

    setPrint(false)
  }
  function getSecondInput(input) {
    setSeconds(Number(input.target.value))
    setPrint(false)
  }

  function clickHandler(evt) {
    evt.preventDefault()
    console.log('click')
    setPrint(true)
  }

  return (
    <>
      <div className="userInputTimerDiv">
        <div className="userInputTimerForm">
          <form className="form" action="">
            <div className="labelsDiv">
              <label className="MinutesLabel">
                Minutes:
                <input
                  type="number"
                  name="minutes"
                  min="1"
                  max="59"
                  required
                  onChange={getMinuteInput}
                />
              </label>

              <label className="secondsLabel">
                Seconds:
                <input
                  type="number"
                  name="seconds"
                  min="1"
                  max="59"
                  required
                  onChange={getSecondInput}
                />
              </label>
            </div>

            <div className="setTimeButtonDiv">
              <button
                className="setTimeButton"
                type="submit"
                value="submit"
                onClick={clickHandler}
              >
                Set Time
              </button>
            </div>
          </form>
        </div>{' '}
      </div>
      <div>
        <TimerDisplay
          timerMinutes={print ? minutes : 0} // if something is less than 10 display 0+print seconds
          timerSeconds={print ? seconds : 0}
        />
      </div>
      <div>
        <StartTimer
          seconds={seconds}
          minutes={minutes}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      </div>
    </>
  )
}

export default UserTimerInput
