import * as ActionTypes from './actionTypes'

export const Users = (state = {
  token: null,
  success: false,
  errMess: null
}, action) => {
  switch (action.type) {
  case ActionTypes.SUCCESS_LOGIN:
    return { ...state, success: action.data.success, token: action.data.token, errMess: null }
  case ActionTypes.LOGIN_FAILED:
    return { ...state, success: false, errMess: action.data.statusText }
  case ActionTypes.REGISTER_SUCCESS:
    return { ...state, success: action.data.success, token: action.data.token, errMess: null }
  case ActionTypes.REGISTER_FAILED:
    return { ...state, success: false, errMess: action.data.statusText }
  case ActionTypes.LOGOUT_SUCCESS:
    return { ...state, success: false }
  case ActionTypes.LOGOUT_FAILED:
    return { ...state, errMess: action.data }
  default:
    return state
  }
}