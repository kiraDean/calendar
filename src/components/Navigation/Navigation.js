import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";


class Navigation extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/calendar">calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/">home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/profile">profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
