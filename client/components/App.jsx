import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import { fetchNames } from '../actions'

function App() {
  const names = useSelector((state) => state.names)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNames())
  }, [])
  console.log(typeof names)

  return (
    <>
      <div className="app">
        <h1>Random Generator</h1>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <Form />
      </div>
    </>
  )
}

export default App
