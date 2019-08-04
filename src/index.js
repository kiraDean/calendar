import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import EventService from './services/EventService';
import { EventServiceProvider } from './components/EventServiceContext';

import store from './store';

const eventService = new EventService();

ReactDOM.render(
 <Provider store={store}>
   <EventServiceProvider value={eventService}>
     <Router>
       <App />
     </Router>
   </EventServiceProvider>
 </Provider>,
 document.getElementById('root')
);
