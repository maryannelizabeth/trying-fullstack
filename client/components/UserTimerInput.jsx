import React, { useEffect, useState } from 'react'
import TimerDisplay from './TimerDisplay'
import StartTimer from './StartTimer'

function UserTimerInput() {
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log('line 10', seconds)
    if (minutes != 0 && seconds == 0) {
      setMinutes(minutes - 1)
      console.log('useeffect ', minutes)
      setSeconds(5)
    }
  }, [seconds])
  useEffect(() => {
    console.log('useeffect mins', minutes)
  }, [minutes])

  async function updateCountdown() {
    // console.log('seconds', seconds)
    // if (minutes + seconds == 0) {
    //   await setSeconds(0)
    // }
    // if (seconds != 0) {
    await setSeconds(seconds - 1)
    console.log('countdown', seconds)
    // }
    // else if (seconds === 0) {
    //   //seconds = 3

    //   console.log('line 15', seconds)
    //   await setSeconds(5)
    //   console.log('countdown mins', seconds)
    // }
  }

  // if (seconds < 10) {
  //   seconds = `0${seconds}`
  // }
  // if (minutes < 10) {
  //   minutes = `0${minutes}`
  // }

  const [print, setPrint] = useState(false)

  function getMinuteInput(minuteInput) {
    setMinutes(minuteInput.target.value)

    setPrint(false)
  }
  function getSecondInput(input) {
    setSeconds(input.target.value)
    setPrint(false)
  }

  function clickHandler(evt) {
    evt.preventDefault()
    setSeconds(Number(seconds))
    setMinutes(Number(minutes))
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
                  value={minutes}
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
                  value={seconds}
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
          // seconds={seconds}
          // minutes={minutes}
          // setMinutes={setMinutes}
          // setSeconds={setSeconds}
          updateCountdown={updateCountdown}
        />
      </div>
    </>
  )
}

export default UserTimerInput
