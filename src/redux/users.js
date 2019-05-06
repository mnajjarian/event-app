import * as ActionTypes from './actionTypes'

export const Users = (state = {
  isLoading: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: localStorage.getItem('creds') ? JSON.stringify(localStorage.getItem('creds')) : null,
  token: localStorage.getItem('token'),
  avatar: localStorage.getItem('avatar') ? localStorage.getItem('avatar') : 'default-avatar.png'
}, action) => {
  switch (action.type) {
  case ActionTypes.LOGIN_REQUEST:
    return { ...state, isLoading: true, isAuthenticated: false, user: action.data }
  case ActionTypes.SUCCESS_LOGIN:
    return { ...state, isLoading: false, isAuthenticated: true, token: action.data, avatar: action.data.avatar }
  case ActionTypes.REQUEST_REGISTER:
    return { ...state, isLoading: true, isAuthenticated: false }
  case ActionTypes.REGISTER_SUCCESS:
    return { ...state, isLoading: false, isAuthenticated: true, token: action.data }
  case ActionTypes.LOGOUT_REQUEST:
    return { ...state, isLoading: true, isAuthenticated: true }
  case ActionTypes.LOGOUT_SUCCESS:
    return { ...state, isLoading: false, isAuthenticated: false, token: null, user: null }
  default:
    return state
  }
}