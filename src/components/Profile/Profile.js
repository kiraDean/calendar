import React from 'react';
import "./Profile.css";
import LoginPage from '../Login/Login';


class Profile extends React.Component {

    state = {
      isLoggedIn: false
    };
    onLogin = () => {
      this.setState({
        isLoggedIn: true
      })
    }; 

  render() {
    let { isLoggedIn } = this.state;

    if(!isLoggedIn) {
      return <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>
    } else {
        return(
          <div className="profile">
            profile<br/>
            u can't see this
          </div>
    );
    }
  }
}

export default Profile;
