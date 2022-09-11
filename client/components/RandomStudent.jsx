import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Randomise() {
  let [result, setResult] = useState('')
  const names = useSelector((state) => state.names)

  function handleClick(e) {
    e.preventDefault()
    let randomNum = Math.floor(Math.random() * names.length)
    setResult(names[randomNum].name)
  }

  return (
    <>
      <button onClick={handleClick}>Random Button</button>
      <p>Result:{result} </p>
    </>
  )
}

export default Randomise
