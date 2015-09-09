import React, { Component } from 'react';

export default class Image extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

    return (
      <span className="img-wrap">
        <img src={ `images/${ place.year }/${ place.month }/${ place.city }/thumb.jpg` } />
      </span>
    );
  }
}
