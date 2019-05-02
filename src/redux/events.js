import * as ActionTypes from './actionTypes'

export const Events = (state = {
  isLoading: true,
  isMoreLoading: false,
  events: []
}, action) => {
  switch (action.type) {
  case ActionTypes.LOADING_EVENTS:
    return { ...state, isLoading: true }
  case ActionTypes.FAILED_EVENTS:
    return { ...state, isLoading: false }
  case ActionTypes.ADD_EVENTS:
    return { ...state, isLoading: false, events: state.events.concat(action.data.data) }
  default:
    return state
  }
}