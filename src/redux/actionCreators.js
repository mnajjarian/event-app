import * as ActionTypes from './actionTypes'

const baseUrl = 'api/events'

export const loginToAccount = (creds) => (dispatch) => {
  console.log(creds)
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(creds)
  })
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error('Error ' + response.status + ': ' + response.statusText)
      error.response = response
      throw error
    },
    error => {
      let errMess = new Error(error.message)
      throw errMess
    })
    .then(response => response.json())
    .then(response => {
      if(response.success) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('creds', JSON.stringify(creds))
        dispatch(loginSuccess(response))
      }
      else {
        let error = new Error('Error ' + response.status )
        error.response = response
        throw error
      }
    })
    .catch(err => dispatch(loginFailed(err.message)))
}

export const loginFailed = (errmess) => ({
  type: ActionTypes.LOGIN_FAILED,
  data: errmess
})
export const loginSuccess = (user) => ({
  type: ActionTypes.SUCCESS_LOGIN,
  data: user
})

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('creds')
  fetch('/logout')
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error('Error ' + response.status + ', ' + response.statusText)
      error.response = response
      throw error
    },
    error => {
      let errmess = new Error(error.message)
      throw errmess
    })
    .then(response => response.json())
    .then(data => dispatch(logoutSuccess(data)))
    .catch(error => dispatch(logoutFailed(error.message)))
}

const logoutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
})

const logoutFailed = (errmess) => ({
  type: ActionTypes.LOGOUT_FAILED,
  data: errmess
})

export const userRegister = (user) => (dispatch) => {
  fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(user)
  })
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error('Error ' + response.status + ', ' + response.statusText )
      error.response = response
      throw error
    },
    error => {
      let errmess = new Error(error.message)
      throw errmess
    })
    .then(response => response.json())
    .then(data => dispatch(registerSuccess(data)))
    .catch(err => dispatch(registerFailed(err.message)))
}

const registerSuccess = (user) => ({
  type: ActionTypes.REGISTER_SUCCESS,
  data: user
})

const registerFailed = (errmess) => ({
  type: ActionTypes.REGISTER_FAILED,
  data: errmess
})

export const fetchEvents = () => (dispatch) => {
  dispatch(eventsLoading(true))

  fetch(baseUrl)
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error('Error: ', response.status + ', ' + response.statusText)
      error.response = response
      throw error
    },
    error => {
      let errMess = new Error(error.message)
      throw errMess
    })
    .then(response => response.json())
    .then(events => {
      dispatch(addEvents(events))
    })
    .catch(error => dispatch(failedEvents(error.message)))
}

export const fetchMoreEvents = (meta) => (dispatch) => {
  dispatch(moreEventsLoading(true))

  fetch(meta)
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error('Error: ' + response.status + ', ' + response.statusText)
      error.response = response
      throw error
    },
    error => {
      let errMess = new Error(error.message)
      throw errMess
    })
    .then(response => response.json())
    .then(events => {
      dispatch(addMoreEvents(events))
    })
    .catch(error => dispatch(failedEvents(error.message)))

}

export const addMoreEvents = (events) => ({
  type: ActionTypes.MORE_EVENTS,
  data: events
})


export const eventsLoading = () => ({
  type: ActionTypes.LOADING_EVENTS
})

export const moreEventsLoading = () => ({
  type: ActionTypes.MORELOADING_EVENTS,
})
export const addEvents = (events) => ({
  type: ActionTypes.ADD_EVENTS,
  data: events
})

export const failedEvents = (errmess) => ({
  type: ActionTypes.FAILED_EVENTS,
  data: errmess
})