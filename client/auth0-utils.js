import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { updateLoggedInUser } from './actions/loggedInUser'

// eslint-disable-next-line no-unused-vars
export function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((state) =>
    Boolean(state.loggedInUser?.token)
  )

  // TODO: call the useAuth0 and destructure:
  // isAuthenticated, getAccessTokenSilently and user
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  if (isAuthenticated && !tokenInRedux) {
    try {
      // TODO: call getAccessTokenSilently and replace the token string below
      getAccessTokenSilently()
        .then((token) => {
          const userToSave = {
            auth0Id: user?.sub,
            email: user?.email,
            token: token,
          }

          dispatch(updateLoggedInUser(userToSave))
        })
        .catch((err) => console.log(err))
    } catch (err) {
      console.error(err)
    }
  }
}
