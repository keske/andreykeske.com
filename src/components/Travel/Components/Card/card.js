import React, { Component } from 'react';

// Component styles
import styles from './Card.styles.js';

export default class Card extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

    // TODO: order
    const order = '-year';

    return (
      place.cover ?
        <div className={ styles + ' col-xs-12 col-md-12 col-md-6 col-lg-6 big-type' }>
          <div className={ 'data ' + place.class }>
            <p className="city">
              { place.city }
              {
                this.showNewLabel(place.date) ?
                  <span className="new">
                    New
                  </span> : null
              }
            </p>
            <p className="date">
              <span className="country">
                { place.country }
              </span>
              <br />
              { this.showStartDateMonth(place.start, place.end) }
              { place.end ? <span>&mdash; { place.end }</span> : null }
            </p>
          </div>
          <span className="img-wrap">
            <img src={ `images/${ place.year }/${ place.month }/${ place.city }/thumb.jpg` } />
          </span>
        </div> : null
    );
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
}
