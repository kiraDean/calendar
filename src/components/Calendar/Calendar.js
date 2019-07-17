import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Day from './Day';
//import DayOfWeek from './DayOfWeek';
import Week from './Week';

class Calendar extends Component {
  constructor(props) {
    super(props);
    let { date , month } = props;


    this.state = {
      date: date,
      month: month,
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.todayButton = this.todayButton.bind(this);
  }

  componentWillMount() {
    moment.locale(this.props.locale);

    if (!!this.state.date) {
      this.state.date.locale(this.props.locale);
    }

    this.state.month.locale(this.props.locale);
  }

  componentWillUpdate(nextProps, nextState) {
    moment.locale(this.props.locale);

    if (!!nextState.date) {
      nextState.date.locale(this.props.locale);
    }

    nextState.month.locale(this.props.locale);
  }

  handleClick(date) { ///???
    const flag = this.props.onSelect(date, this.state.date, this.state.month);

    if (flag === true) {
      this.setState({
        date: moment(date),
      });
    } else if (flag === false) {
      this.setState({
        date: null,
      });
    }
  }

  previous() {
    this.setState({
      month: moment(this.state.month).subtract(1, 'month'),
    });
  }

  next() {
    this.setState({
      month: moment(this.state.month).add(1, 'month'),
    });
  }
  todayButton() {
    this.setState({
      month: moment(),
    })
  }
  render() {
    const { startOfWeekIndex, dayOfWeekFormat } = this.props;

    //const classes = ['Calendar', this.props.className].join(' ');     ///???

    const today = moment();

    /*const format = dayOfWeekFormat &&
                    dayOfWeekFormat !== '' &&
                    moment(today, dayOfWeekFormat).isValid() ? dayOfWeekFormat : 'dd'*/

    const date = this.state.date;
    const month = this.state.month;

    const current = month ///???
      .clone()
      .startOf('month')
      .day(startOfWeekIndex);

    if (current.date() > 1 && current.date() < 7) {
      current.subtract(7, 'd');
    }

    const end = month
      .clone()
      .endOf('month')
      .day(7 + startOfWeekIndex);

    if (end.date() > 7) {
      end.subtract(7, 'd');
    }

    const elements = [];
    let days = [];
    let week = 1;
    let i = 1;
    const daysOfWeek = [];
    //const day = current.clone();
/*    for (let j = 0; j < 7; j++) {
      const dayOfWeekKey = 'dayOfWeek' + j;
      daysOfWeek.push(<DayOfWeek key={dayOfWeekKey} date={day.clone()} format={format} />);
      day.add(1, 'days');
    }*/

    while (current.isBefore(end)) {
      let dayClasses = this.props.dayClasses(current);
      if (!current.isSame(month, 'month')) {
        dayClasses = dayClasses.concat(['other-month']);
      }
      let props = {
        date: current.clone(),
        selected: date,
        month: month,
        today: today,
        classes: dayClasses,
        handleClick: this.handleClick,
        week: week,
      };

      let children;

      days.push(
        <Day key={i++} {...props}>
          {children}
        </Day>
      );
      console.log(week)
      current.add(1, 'days');
      if (current.day() === startOfWeekIndex) {
        let weekKey = 'week' + week++;
        console.log(weekKey)
        elements.push(<Week key={weekKey}>{days}</Week>);
        days = [];
        console.log(days);
      }
    }

    let nav;

      nav = (
        <tr className="month-header">
          <th className="nav previous">
            <button className="nav-inner" onClick={this.previous} type="button">
              «
            </button>
          </th>
          <th className="month-year">
            <span className="month">{month.format('MMMM')}</span>{' '}
            <span className="year">{month.format('YYYY')}</span>
          </th>
          <th className="nav next">
            <button className="nav-inner" onClick={this.next} type="button">
              »
            </button>
            <button className="today" onClick={this.todayButton} type="button">
              Today
            </button>
          </th>
        </tr>
      );

    return (
      <table className="Calendar">
        <thead>{nav}</thead>
        <thead>
          <tr className="days-header">{daysOfWeek}</tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
    );
  }
}
Calendar.defaultProps = {
  month: moment(),
  dayClasses: () => [],
  useNav: true,
  locale: 'en',
  startOfWeekIndex: 0,
  dayOfWeekFormat: 'dddd',
};
Calendar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  date: PropTypes.object,
  month: PropTypes.object,
  dayClasses: PropTypes.func,
  useNav: PropTypes.bool,
  locale: PropTypes.string,
  startOfWeekIndex: PropTypes.number,
  dayRenderer: PropTypes.func,
  dayOfWeekFormat: PropTypes.string,
};

export default Calendar;
