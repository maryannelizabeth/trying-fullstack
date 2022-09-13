import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import RandomStudent from './RandomStudent'
import { fetchNames } from '../actions'
import Nav from './Nav'

function RandomGenerator() {
  const names = useSelector((state) => state.names)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNames())
  }, [])


  return (
    <>
    <Nav />
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

// to make an unauthenticated request
// 1. dispatch the action OR call the api function
// 2. done

// to make an authenticated request
// 1. get an access token (getAccessTokenSilently) (async/await)
// 2. dispatch the action OR call the api function WITH the token (set Authorization Bearer token)
// 3. (on the server route) use checkJwt which gives you req.auth.sub (userId)
