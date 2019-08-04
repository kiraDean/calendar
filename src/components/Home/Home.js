import React from 'react';
import './Home.css';


class Home extends React.Component {

  render() {

    return(
      <div className="home-panel">
        You have <strong className="count-block">X</strong> cases for today,<br />
                 <strong className="count-block">Y</strong> this week
      </div>
    );
  }
}

export default Home;
