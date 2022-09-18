import { getNames, addName } from '../apis/names'

export const SET_NAMES = 'SET_NAMES'
export const ADD_NAME = 'ADD_NAME'

export function setNames(names) {
  return {
    type: SET_NAMES,
    payload: names,
  }
}

export function fetchNames(token) {
  return (dispatch) => {
    return getNames(token).then((names) => {
      dispatch(setNames(names))
    })
  }
}

export function addWord(name) {
  return {
    type: ADD_NAME,
    payload: name,
  }
}

export function fetchName(name) {
  return (dispatch) => {
    return addName(name).then((name) => {
      dispatch(addWord(name))
    })
  }
}
