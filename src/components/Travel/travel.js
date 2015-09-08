import React, { Component } from 'react';
import { connect } from 'react-redux';

// View mode, card or text
import Card from './Card/card.js';

// Component styles
import styles from './Travel.styles.js';

@connect(state => state.places)
export default class Travel extends Component {

  static propTypes = {
    places: React.PropTypes.array,
  }

  render() {
    const { places } = this.props;

    return (
      <div className={ styles }>
        <h2>
          Travel
        </h2>
        {
          places.map((place) => {
            return (
              <Card place={ place } />
            );
          })
        }
      </div>
    );
  }
}
