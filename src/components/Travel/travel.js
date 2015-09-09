import React, { Component } from 'react';
import { connect } from 'react-redux';

// View mode, card or text
import Card from './Components/Card/card.js';
import Text from './Components/Text/text.js';

// Component styles
import styles from './Travel.styles.js';

@connect(state => state.places)
export default class Travel extends Component {

  static propTypes = {
    places: React.PropTypes.array,
  }

  render() {
    const { places } = this.props;
    const card = false;

    return (
      <div className={ styles }>
        <div className="container">
          <div className="row">
            <h2>
              Travel stories
            </h2>
            {
              places.map((place) => {
                return (
                  card ? <Card place={ place } /> : <Text place={ place } />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
