import { getNames, addName } from '../apis/names'

export const SET_NAMES = 'SET_NAMES'
export const ADD_NAME = 'ADD_NAME'

export function setNames(names) {
  return {
    type: SET_NAMES,
    payload: names,
  }
}
//GET
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
//POST
export function fetchName(name, token) {
  return (dispatch) => {
    return addName(name, token).then((name) => {
      dispatch(addWord(name))
    })
  }
}
