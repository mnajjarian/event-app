import * as ActionTypes from './actionTypes'

export const Messages = (state = {
  errMess: null
}, action) => {
  switch (action.type) {
  case ActionTypes.NOTIFY_MESS:
    return { ...state, errMess: action.data }
  case ActionTypes.CLEAR_MESS:
    return { ...state, errMess: null }
  default:
    return state
  }
}

