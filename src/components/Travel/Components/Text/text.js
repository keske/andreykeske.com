import React, { Component } from 'react';

// Component styles
import styles from './Text.styles.js';

// Components
import NewLabel from './../Card/NewLabel.js';
import VisitedDate from './../Card/VisitedDate.js';

export default class Card extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

    return (
      <div className={ styles + ' no-cover-no-link year-' + place.year }>
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
