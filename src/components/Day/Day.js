import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
  render() {
    const {
      today,
      date,
      selected,
      classes,
      handleClick,
      week,
      events
    } = this.props;
    let title = '';
    let time = '';

    const classNames = ['Day card'];
    if (selected && selected.isSame(date, 'day')) {
      classNames.push('text-white bg-primary');
    } else if (today.isSame(date, 'day')) {
      classNames.push('text-white border-primary green');
    } else {
      classNames.push('border-primary');
    }

    if (events) {
      let currentEvent = events.find(event => event.date === date.toISOString())
      if  (currentEvent) {
        title = currentEvent.title;
        time = currentEvent.time
        classNames.push('red');
      }
    }


    let format = '';
    if(week===1) {
       format = 'dddd, D';
    } else {
       format ='D'
    }

    let body = (
        <div
          className=" Day-inner"
          onClick={() => handleClick(date)} >
          <p>{date.format(format)}</p>
          <p>{time}</p>
          <p>{title}</p>

        </div>
      );


    return (
      <span
        className={[...classNames, ...classes].join(' ')}
        data-date={date.toISOString()}
        data-day={date.format('D')} >
        {body}
      </span>
    );
  }
}

Day.propTypes = {
  handleClick: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  selected: PropTypes.object,
};

export default Day;
