import React, { Component } from 'react';
import { Link } from 'react-router';

// Component styles
import styles from './Text.styles.js';

export default class Text extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    place: React.PropTypes.object,
    application: React.PropTypes.object,
  }

  // If card date = current month
  // then show label
  showNewLabel(date) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const _month = date.getMonth() + 1;
    const _year = date.getFullYear();

    return (_month === month && _year === year) ? true : false;
  }

  // Show date
  // if sart date month and end date month are different
  // ex: 11 Sep -- 2 Oct
  // or if months same
  // ex: 11 -- 12 Sep
  showStartDateMonth(start, end) {
    const splitStart = start.split(' ');
    const splitEnd = end.split(' ');

    return (splitStart[1] === splitEnd[1]) ? splitStart[0] : start;
  }

  render() {
    const { place, application } = this.props;
    const city = place.city.replace(/ /g, '');

    const renderNewLabel = () => {
      return (
        this.showNewLabel(place.date) ?
          <span className="new">
            New
          </span> : null
      );
    };

    const renderVisitedDate = () => {
      return (
        <p className="date">
          <span className="country">
            { place.country }
          </span>
          <br />
          { this.showStartDateMonth(place.start, place.end) }
          { place.end ? <span>&mdash; { place.end }</span> : null }
        </p>
      );
    };

    function renderInner() {
      return (
        <div className={ styles + ' year-' + place.year + 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
          <div className={ 'data big-type year-' + place.year }>
            <p className="city">
              { place.city }
              { renderNewLabel() }
            </p>
            { renderVisitedDate() }
          </div>
        </div>
      );
    }

    return (
      place.cover ?
        <Link to={ `/${ application.language }/places/${ place.year }/${ place.month }/${ city }` }>
          { renderInner() }
        </Link> : renderInner()
    );
  }
}
