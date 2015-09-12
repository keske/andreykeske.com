import React, { Component } from 'react';
import { Link } from 'react-router';

// Component styles
import styles from './Card.styles.js';

// Components
import NewLabel from './NewLabel.js';
import VisitedDate from './VisitedDate.js';
import Image from './Image.js';

export default class Card extends Component {

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
          <div className={ styles + ' col-xs-12 col-md-12 col-md-6 col-lg-6 big-type' }>
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
