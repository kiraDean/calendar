const eventsRequested = () => {
  return {
    type: 'FETCH_EVENT_REQUEST'
  }
};

const eventsLoaded = (newEvents) => {
  return {
    type: 'FETCH_EVENT_SUCCESS',
    payload: newEvents
  }
};

const eventAdded = (eventId) => {
  return {
    type: 'EVENT_ADDED',
    payload: eventId
  }
}
const eventDeleted = (eventId) => {
  return {
    type: 'EVENT_DELETED',
    payload: eventId
  }
}

const fetchEvents = (eventService, dispatch) => () => {
  dispatch(eventsRequested());
  eventService.getEvents()
      .then((data) => dispatch(eventsLoaded(data)))
}

export {
  fetchEvents

}
