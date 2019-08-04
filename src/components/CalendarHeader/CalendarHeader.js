import React, { Component } from 'react';
//import moment from 'moment';

import './CalendarHeader.css'

export default class CalendarHeader extends Component {
  render() {
    const {month, previous, next, todayButton} = this.props;
    return (
      <div className="card border-primary my-1 p-2 myHeader">

              <button className="nav-link" onClick={previous} type="button">«</button>

              <span className="nav-link">{month.format('MMMM YYYY')}</span>

              <button className="nav-link" onClick={next} type="button">»</button>

              <button className="nav-link" onClick={todayButton} type="button">today</button>

              <button className="nav-link" type="button">add event</button>
      </div>
    )
  }
}
