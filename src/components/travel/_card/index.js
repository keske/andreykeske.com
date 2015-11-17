import React, { Component } from 'react';

import { Link } from 'react-router';

// Component styles
import styles from './Card.styles.js';

// Components
import NewLabel from './_newLabel.js';
import VisitedDate from './_visitedDate.js';
import Image from './_image.js';

export default class Card extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    place: React.PropTypes.object,
    application: React.PropTypes.object,
  }

  render() {
    const { place, application } = this.props;

    return (
      place.cover ?
        <Link
          to={ `/${ application.language }/places/${ place.year }/${ place.month }/${ place.city }` }>
          <div className={ `${ styles } col-xs-12 col-md-12 col-md-6 col-lg-6 big-type ${ place.class }` }>
            <div className={ 'data ' + place.class }>
              <p className="city">
                { place.city }
                <NewLabel place={ place } />
              </p>
              <VisitedDate place={ place } />
            </div>
            <Image place={ place } />
          </div>
        </Link> : null
    );
  }
}
