import React, { Component } from 'react';

// Component styles
import styles from './Text.styles.js';

export default class Card extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

    // TODO: order
    const order = '-year';

    return (
      <div className={ styles + ' data no-cover-no-link year-' + place.year }>
        <p className="city">
          { place.city }
          <span className="new">
            New
          </span>
        </p>
        <p className="date">
          <span className="country">
            { place.country }
          </span>
          <br />
          { this.showStartDateMonth(place.start, place.end) }
          { place.end ? <span>&mdash; { place.end }</span> : null }
          { order === '-year' ? place.year : null }
        </p>
      </div>
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

    if (splitStart[1] === splitEnd[1]) {
      return splitStart[0];
    } else {
      return start;
    }

  }
}
