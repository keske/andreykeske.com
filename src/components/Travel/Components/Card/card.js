import React, { Component } from 'react';

// Component styles
import styles from './Card.styles.js';

// Components
import NewLabel from './NewLabel.js';
import VisitedDate from './VisitedDate.js';
import Image from './Image.js';

export default class Card extends Component {

  static propTypes = {
    place: React.PropTypes.object,
  }

  render() {
    const { place } = this.props;

    return (
      place.cover ?
        <div className={ styles + ' col-xs-12 col-md-12 col-md-6 col-lg-6 big-type' }>
          <div className={ 'data ' + place.class }>
            <p className="city">
              { place.city }
              <NewLabel place={ place } />
            </p>
            <VisitedDate place={ place } />
          </div>
          <Image place={ place } />
        </div> : null
    );
  }
}
