import React, { Component } from 'react';
import { Link } from 'react-router';

import { showNewLabel, showStartDateMonth } from '../../utils/travel';

// Component styles
import { styles } from './styles/styles.scss';

export default class Text extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    place: React.PropTypes.object,
    application: React.PropTypes.object,
  };

  render() {
    const { place, application } = this.props;
    const city = place.city.replace(/ /g, '');

    const renderNewLabel = () => {
      return (
        showNewLabel(place.date) &&
          <span className="new-dot" />
      );
    };

    const renderVisitedDate = () => {
      return (
        <p className="date">
          <span className="country">
            { place.country },
          </span>
          { showStartDateMonth(place.start, place.end) }
          { place.end && <span>..{ place.end }</span> }
        </p>
      );
    };

    function renderInner() {
      return (
        <div className={ styles + ' year-' + place.year + 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
          <div className={ 'data' }>
            { renderNewLabel() }
            <p className="city">
              { place.city }
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
