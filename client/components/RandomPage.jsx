import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import RandomStudent from './RandomStudent'
import { fetchNames } from '../actions'
import Nav from './Nav'
import DeleteName from './DeleteName'
import { useAuth0 } from '@auth0/auth0-react'
import { useCacheUser } from '../auth0-utils'

function RandomGenerator() {
  useCacheUser()
  const names = useSelector((state) => state.names)
  const dispatch = useDispatch()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      return <p>Please log in to use</p>
    } else {
      getAccessTokenSilently()
        //Get
        .then((token) => {
          return dispatch(fetchNames(token))
        })

        //Post
        // .then(() => dispatch(fetchName(name, saveToken)))
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
    <>
      <Nav />
      <div className="app">
        <br></br>
        <div className="randomNamesList">
          {' '}
          <div className="enterStudentName">
            <h5>Add student name to list:</h5>
            <Form />
          </div>
          <ol>
            {names.map((name) => (
              <li key={name.id}>
                {name.name}
                <DeleteName id={name.id} />
              </li>
            ))}
          </ol>
        </div>

        <br></br>
        <div className="RandomStudentButtonAppDiv">
          <RandomStudent />
        </div>
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
