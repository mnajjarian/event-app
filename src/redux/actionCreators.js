import * as ActionTypes from './actionTypes'

const baseUrl = 'api/events'

export const uploadImage = (imgFile) => (dispatch) => {
  const formData = new FormData()
  formData.append('title', 'avatar')
  formData.append('myFile', imgFile)
  fetch('/imageUpload', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error(response.status + ', ' + response.statusText)
      error.response = response
      throw error
    },
    err => {
      throw err
    })
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
}

export const updateImage = (data) => ({
  type: ActionTypes.UPDATE_IMAGE,
  data: data
})

export const loginToAccount = (creds) => (dispatch) => {
  dispatch(loginRequest(creds))

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(creds)
  })
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error(response.status + ', ' + response.statusText)
      error.response = response
      throw error
    },
    error => {
      throw error
    })
    .then(response => response.json())
    .then(response => {
      if(response.success) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', creds.username)
        dispatch(loginSuccess(response))
      }
      else {
        let error = new Error('Error ' + response.status )
        error.response = response
        throw error
      }
    })
    .catch(err => {
      dispatch(notifyMessages(err.message))
      setTimeout(() => {
        dispatch(clearErrMess())
      },5000)
    })
}

export const notifyMessages = (mess) => ({
  type: ActionTypes.NOTIFY_MESS,
  data: mess
})
export const clearErrMess = () => ({
  type: ActionTypes.CLEAR_MESS
})
export const loginRequest = (creds) => ({
  type: ActionTypes.LOGIN_REQUEST,
  data: creds
})

export const loginFailed = (errmess) => ({
  type: ActionTypes.LOGIN_FAILED,
  data: errmess
})
export const loginSuccess = (creds) => ({
  type: ActionTypes.SUCCESS_LOGIN,
  data: creds
})

export const userLogout = () => (dispatch) => {
  dispatch(logoutRequest())
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  dispatch(logoutSuccess())
}

export const logoutRequest = () => ({
  type: ActionTypes.LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
})


export const userRegister = (creds) => (dispatch) => {
  dispatch(requestRegister())
  fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(creds)
  })
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error(response.status + ', ' + response.statusText )
      error.response = response
      throw error
    },
    error => {
      throw error
    })
    .then(response => response.json())
    .then(response => {
      if(response.success) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', creds.username)
      } else {
        let error = new Error(response.status + ', ' + response.statusText)
        error.response = response
        throw error
      }
    })
    .then(data => dispatch(registerSuccess(data)))
    .catch(err => {
      dispatch(notifyMessages(err.message))
      setTimeout(() => {
        dispatch(clearErrMess())
      },5000)
    })
}
const requestRegister = () => ({
  type: ActionTypes.REQUEST_REGISTER,
})
const registerSuccess = (user) => ({
  type: ActionTypes.REGISTER_SUCCESS,
  data: user
})

export const fetchEvents = () => (dispatch) => {
  dispatch(eventsLoading(true))

  fetch(baseUrl)
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error(response.status + ', ' + response.statusText)
      error.response = response
      throw error
    },
    error => {
      let errMess = new Error(error.message)
      throw errMess
    })
    .then(response => response.json())
    .then(events => dispatch(addEvents(events)))
    .catch(err =>  {
      dispatch(notifyMessages(err.message))
      dispatch(eventsFailed())
    })
}

export const eventsLoading = () => ({
  type: ActionTypes.LOADING_EVENTS
})

export const addEvents = (events) => ({
  type: ActionTypes.ADD_EVENTS,
  data: events
})

export const eventsFailed = () => ({
  type: ActionTypes.FAILED_EVENTS
})

