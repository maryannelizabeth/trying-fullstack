import { getNames, addName } from '../apis/names'

export const SET_NAMES = 'SET_NAMES'
export const ADD_NAME = 'ADD_NAME'

export function setNames(names) {
  console.log('Actions sNfn', names)
  return {
    type: SET_NAMES,
    payload: names,
  }
}

export function fetchNames() {
  return (dispatch) => {
    return getNames().then((names) => {
      // console.log('fetchnames', names)
      dispatch(setNames(names))
      // console.log(setNames(names))
    })
  }
}

export function addWord(name) {
  console.log('action aWfb', name)
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
