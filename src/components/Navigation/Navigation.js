import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="#">EventApp</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
