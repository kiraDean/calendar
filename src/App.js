import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


import UseCalendar from './components/Calendar/UseCalendar'
import Profile from './components/Profile/Profile'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'



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
            <Route render ={() => <h2>Error: Path does not exist!!!111</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
