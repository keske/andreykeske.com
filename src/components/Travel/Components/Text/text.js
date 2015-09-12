import React, { Component } from 'react';
import { Link } from 'react-router';

// Component styles
import styles from './Text.styles.js';

// Components
import NewLabel from './../Card/NewLabel.js';
import VisitedDate from './../Card/VisitedDate.js';

export default class Text extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    place: React.PropTypes.object,
  }

  render() {
    const { place, language } = this.props;
    const city = place.city.replace(/ /g, '');

    return (
      place.cover ?
        <Link to={ `${ language }/places/${ place.year }/${ place.month }/${ city }` }>
          <Inner place={ place } />
        </Link> : <Inner place={ place } />

    );
  }
}

class Inner extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

    return (
      <div className={ styles + ' year-' + place.year }>
        <div className={ 'data big-type year-' + place.year }>
          <p className="city">
            { place.city }
            <NewLabel place={ place } />
          </p>
          <VisitedDate place={ place } />
        </div>
      </div>
    );
  }
}
