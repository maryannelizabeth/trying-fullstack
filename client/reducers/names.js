import { SET_NAMES, ADD_NAME } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_NAMES:
      return payload
    case ADD_NAME:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
