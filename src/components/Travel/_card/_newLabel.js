import React, { Component } from 'react';

export default class NewLabel extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

    return (
      this.showNewLabel(place.date) ?
        <span className="new">
          New
        </span> : null
    );
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
