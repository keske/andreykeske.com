import React, { Component } from 'react';

export default class Image extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {

    const { place } = this.props;
    let city = place.city.replace(/ /g, '');

    return (
      <span className="img-wrap">
        <img src={ `./src/components/travel/_place/places/${ place.year }/${ place.month }/${ city }/images/thumb.jpg` } />
      </span>
    );
  }
}
