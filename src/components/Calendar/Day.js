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
      children,
      week,
    } = this.props;

    const classNames = ['Day'];
    if (today.isSame(date, 'day')) {
      classNames.push('today');
    }
    if (selected && selected.isSame(date, 'day')) {
      classNames.push('selected');
    }

    let format = '';
    console.log(this.props.week)
    if(this.props.week===1) {
       format = 'dddd, D';
    } else {
       format ='D'
    }

    let body;
    if (!!children) {
      body = children;
    } else {
      body = (
        <div
          className="Day-inner"
          onClick={() => handleClick(date)}
        >
          <p>{date.format(format)}</p>

        </div>
      );
    }

    return (
      <td
        className={[...classNames, ...classes].join(' ')}
        data-date={date.toISOString()}
        data-day={date.format('D')}
      >
        {body}
      </td>
    );
  }
}

Day.propTypes = {
  handleClick: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  selected: PropTypes.object,
  children: PropTypes.node,
};

export default Day;
