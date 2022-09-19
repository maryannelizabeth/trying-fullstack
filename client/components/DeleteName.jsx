import React from 'react'
import { deletingName } from '../actions/index.js'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const delButton = (props) => {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  function clickHandler(e) {
    e.preventDefault()
    //console.log(props.id)
    getAccessTokenSilently()
      .then((token) => dispatch(deletingName(props.id, token)))
      .catch((err) => console.error(err))
  }

  return <button onClick={clickHandler}>X</button>
}

export default delButton
