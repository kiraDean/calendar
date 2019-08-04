import React  from 'react';
import { EventServiceConsumer } from '../EventServiceContext';


const withEventService = () => (Wrapped) => {
  return (props) => {
    return (
      <EventServiceConsumer>
        {
          (eventService) => {
            return (              <Wrapped {...props}
                eventService={eventService}/>);
          }
        }
      </EventServiceConsumer>
    )
  }
};

export default withEventService;
