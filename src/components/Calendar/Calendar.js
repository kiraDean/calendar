import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from    'react-redux'

import Day from '../Day';
import CalendarHeader from '../CalendarHeader';
import { withEventService } from '../Hoc';
import { fetchEvents } from '../../actions';

import './Calendar.css'

class Calendar extends Component {
  constructor(props) {
    super(props);
    let { date , month } = props;

    this.state = {
      date: date,
      month: month,
    };
}

  componentWillMount() {

    moment.locale(this.props.locale);

    if (!!this.state.date) {
      this.state.date.locale(this.props.locale);
    }

    this.state.month.locale(this.props.locale);
  }

   componentDidMount() {
     this.props.fetchEvents();
   }

componentWillUpdate(nextProps, nextState) {
  moment.locale(this.props.locale);

  if (!!nextState.date) {
    nextState.date.locale(this.props.locale);
  }

  nextState.month.locale(this.props.locale);
}

  handleClick = (date) => {
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

  previous = () => {
    this.setState({
      month: moment(this.state.month).subtract(1, 'month'),
    });
  }

  next = () => {
    this.setState({
      month: moment(this.state.month).add(1, 'month'),
    });
  }

  todayButton = () => {
    this.setState({
      month: moment(),
    })
  }

  render() {
    const { startOfWeekIndex, events} = this.props;
    console.log(events);
    const today = moment();

    const { date } = this.state;
    const { month } = this.state;

    const current = month
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
        events: events
      };

      days.push(
        <Day key={i++} {...props} />
      );

      current.add(1, 'days');

      if (current.day() === startOfWeekIndex) {
        elements.push(<div className="week" key={week}>{days}</div>);
        week++;
        days = [];
      }
    }

    return (
      <div className="Calendar">
        <CalendarHeader
            previous={this.previous}
            next={this.next}
            todayButton={this.todayButton}
            month={month} />
        <div className="c-field">{elements}</div>
      </div>
    );
  }
}

Calendar.defaultProps = {
  month: moment(),
  dayClasses: () => [],
  locale: 'en',
  startOfWeekIndex: 1
};

// Calendar.propTypes = {
//   onSelect: PropTypes.func.isRequired,
//   date: PropTypes.object,
//   month: PropTypes.object,
//   dayClasses: PropTypes.func,
//   locale: PropTypes.string,
//   startOfWeekIndex: PropTypes.number
// };

const mapStateToProps = ({events})=> {
  return {events}
}
const mapDispatchToProps = (dispatch, { eventService }) => {
  return {
    fetchEvents: fetchEvents(eventService, dispatch)
  };
};

export default withEventService()(connect(mapStateToProps,mapDispatchToProps)(Calendar))
