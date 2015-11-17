import React, { Component } from 'react';
import { Link } from 'react-router';

import { showNewLabel, showStartDateMonth } from '../../../src/utils/travel';

// Component styles
import styles from './Card.styles.js';

export default class Card extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    place: React.PropTypes.object,
    application: React.PropTypes.object,
  }

  render() {
    const { place, application } = this.props;

    function renderImage() {
      const city = place.city.replace(/ /g, '');

      return (
        <span className="img-wrap">
          <img src={ `./src/components/place/places/${ place.year }/${ place.month }/${ city }/images/thumb.jpg` } />
        </span>
      );
    }

    const renderVisitedDate = () => {
      return (
        <p className="date">
          <span className="country">
            { place.country }
          </span>
          <br />
          { showStartDateMonth(place.start, place.end) }
          { place.end ? <span>&mdash; { place.end }</span> : null }
        </p>
      );
    };

    const renderNewLabel = () => {
      return (
        showNewLabel(place.date) ?
          <span className="new">
            New
          </span> : null
      );
    };

    return (
      place.cover ?
        <Link to={ `/${ application.language }/places/${ place.year }/${ place.month }/${ place.city }` }>
          <div className={ `${ styles } col-xs-12 col-md-12 col-md-6 col-lg-6 big-type ${ place.class }` }>
            <div className={ 'data ' + place.class }>
              <p className="city">
                { place.city }
                { renderNewLabel() }
              </p>
              { renderVisitedDate }
            </div>
            { renderImage() }
          </div>
        </Link> : null
    );
  }
}
