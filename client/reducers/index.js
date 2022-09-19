import { combineReducers } from 'redux'

import names from './names'
import user from './loggedInUser'
export default combineReducers({
  names,
  user,
})
