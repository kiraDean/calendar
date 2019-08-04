import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


import UseCalendar from '../UseCalendar'
import Profile from '../Profile'
import Home from '../Home'
import Navigation from '../Navigation'



class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile}/>
            <Route path="/calendar" component={UseCalendar}/>
            <Route render ={() => <h2>Error: Path does not exist</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
