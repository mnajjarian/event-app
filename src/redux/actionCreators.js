import * as ActionTypes from './actionTypes'

const BaseUrl = 'https://api.hel.fi/linkedevents/v1/event/?format=json&include=location'

export const fetchEvents = () => (dispatch) => {
  dispatch(eventsLoading(true))

  fetch(BaseUrl)
    .then(response => {
      if(response.ok) {
        return response
      }
      let error = new Error('Error: ', response.status + ', ' + response.statusText)
      error.message = response
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
      error.message = response
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