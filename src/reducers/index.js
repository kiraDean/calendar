const updateEvent = (state, eventId, quantity) => {
  return state;
}

const reducer = (state, action) => {

  if (state===undefined){
    return {
      events: []
    }
  }

  switch (action.type) {
    case 'FETCH_EVENT_REQUEST':
      return {
        events: []
      };

    case 'FETCH_EVENT_SUCCESS':
      return {
        events: action.payload
      };

    case 'EVENT_ADDED':
      return  updateEvent(state, action.payload, 1);

    case 'EVENT_DELETED':
      return  updateEvent(state, action.payload, -1);

  }

}

export default reducer;
