import * as ActionTypes from './actionTypes'

export const Events = (state = {
  isLoading: true,
  isMoreLoading: false,
  errMess: false,
  events: [],
  meta: []
}, action) => {
  switch (action.type) {
  case ActionTypes.LOADING_EVENTS:
    return { ...state, isLoading: true, errMess: null, events: [] }
  case ActionTypes.ADD_EVENTS:
    return { ...state, isLoading: false, errMess: null, events: action.data.data, meta: action.data.meta }
  case ActionTypes.MORELOADING_EVENTS:
    return { ...state, isLoading: false, errMess: null, isMoreLoading: true }
  case ActionTypes.MORE_EVENTS:
    return { ...state, isLoading: false, isMoreLoading: false, errMess: null, events: state.events.concat(...action.data.data), meta: action.data.meta }
  case ActionTypes.FAILED_EVENTS:
    return { ...state, isLoading: false, errMess: action.data }
  default:
    return state
  }
}