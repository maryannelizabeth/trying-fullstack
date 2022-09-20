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
      <div className="randomStudentResultDiv">
        <p className="resultP"> Result: </p>
        <h1> {result} </h1>
      </div>
      <div className="RandomStudentButtonDiv">
        <button className="button-1" onClick={handleClick}>
          Generate Random Student
        </button>
      </div>
    </>
  )
}

export default Randomise
