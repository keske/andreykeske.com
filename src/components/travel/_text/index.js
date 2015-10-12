import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Component styles
import styles from './Text.styles.js';

// Components
import NewLabel from './../_card/_newLabel.js';
import VisitedDate from './../_card/_visitedDate.js';

@connect(state => state.application)
export default class Text extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    place: React.PropTypes.object,
  }

  render() {
    const { place, application } = this.props;
    const city = place.city.replace(/ /g, '');

    return (
      place.cover ?
        <Link to={ `/${ application.language }/places/${ place.year }/${ place.month }/${ city }` }>
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
      <div className={ styles + ' year-' + place.year + 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
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
