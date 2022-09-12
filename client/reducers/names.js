import { SET_NAMES, ADD_NAME } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log('reducer type', type)
  console.log('reducer payload', payload)

  switch (type) {
    case SET_NAMES:
      //console.log('state', state)
      return payload
    case ADD_NAME:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
