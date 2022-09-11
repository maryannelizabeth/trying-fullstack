import React, { useState } from 'react'
import FormDisplay from './FormDisplay'

function UserInputRandomGenerator() {
  const [list, setList] = useState('')
  const [print, setPrint] = useState(false)

  function nameInput(inputValue) {
    setList(inputValue.target.value)
    setPrint(false)
  }

  function clickHandler(evt) {
    evt.preventDefault()
    setPrint(true)
  }

  return (
    <>
      <form className="RandomGeneratorForm" method="">
        <label>
          Names:
          <input type="text" name="nameInput" onChange={nameInput} />
        </label>
        <button onClick={clickHandler}>Submit</button>
      </form>
      <div>
        <section>
          <FormDisplay inputWord={print ? list : ''} />
        </section>
      </div>
    </>
  )
}

export default UserInputRandomGenerator
