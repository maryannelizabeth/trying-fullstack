import React from 'react'
import { fetchName } from '../actions/index.js'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const Form = () => {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  function addName(e) {
    if (e.keyCode === 13) {
      getAccessTokenSilently()
        .then((token) => dispatch(fetchName(e.target.value, token)))
        .catch((err) => console.error(err))
    }
  }

  return <input placeholder="enter name" onKeyUp={addName} />
}

export default Form
