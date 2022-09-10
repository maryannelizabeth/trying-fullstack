import React from 'react'
import { fetchName } from '../actions/index.js'
import { useDispatch } from 'react-redux'

const Form = () => {
  const dispatch = useDispatch()

  function addName(e) {
    if (e.keyCode === 13) {
      dispatch(fetchName(e.target.value))
      e.target.value = ''
    }
  }

  return <input placeholder="enter word" onKeyUp={addName} />
}

export default Form
