import React, { Component } from 'react';
import Calendar from './Calendar.js';
import moment from 'moment';
import "./UseCalendar.css";



class UseCalendar extends Component {
  onSelect(date, previousDate, currentMonth) {
    if (moment(date).isSame(previousDate)) {
      console.info('onSelect: false', date);
      return false;
    } else if (currentMonth.isSame(date, 'month')) {
      console.info('onSelect: true', date);
      return true;
    } else {
      console.info('onSelect: none', date);
    }
  }

  render() {
    let dayClasses = function(date) {
      let day = date.isoWeekday();
      if (day === 6 || day === 7) {
        return ['weekend'];
      }
      return [];
    };
    return (
      <div>
        <div className="panel">
        </div>
          <div className="CalendarSpace">
            <Calendar onSelect={this.onSelect}
            dayClasses={dayClasses}
            startOfWeekIndex={1}/>
          </div>
      </div>
    );
  }
}

export default UseCalendar;
