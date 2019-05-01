import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Events } from './events'
import { Users } from './users'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      events: Events,
      users: Users
    }),
    applyMiddleware(thunk, logger)
  )
  return store
}