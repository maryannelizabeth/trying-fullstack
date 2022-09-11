import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import RandomStudent from './RandomStudent'
import { fetchNames } from '../actions'

function RandomGenerator() {
  const names = useSelector((state) => state.names)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNames())
  }, [])
  console.log('names', names)

  return (
    <>
      <div className="app">
        <h1>Random Generator</h1>
        <ul>
          {names.map((name) => (
            <li key={name.id}>{name.name}</li>
          ))}
        </ul>
        <Form />
        <RandomStudent />
      </div>
    </>
  )
}

export default RandomGenerator
