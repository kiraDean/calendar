import React from 'react';
import "./Profile.css";
//import LoginPage from '../Login/Login';


class Profile extends React.Component {

  render() {
    return(
      <div className="profile-block">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="nav-link" >high</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" >middle</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" >low</button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

        <div className="card border-primary m-2">
          <div className="card-header header-row">
            <div className="header-col c1">
            <div className="custom-header">July, 25</div>
            <div className="custom-header">do exercises</div>
            </div>
            <div className="header-col c2">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option1" autoComplete="off" /> edit
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> delete
              </label>
            </div>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Some quick example text<br /> to build on the card title and make up the bulk<br /> of the card's content.</p>

          </div>

        </div>

      </div>

    )
  }
}

export default Profile;
