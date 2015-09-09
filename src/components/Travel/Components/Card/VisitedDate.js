import React, { Component } from 'react';

export default class VisitedDate extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

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
}
