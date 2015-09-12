import React, { Component } from 'react';
import { connect } from 'react-redux';

// View mode, card or text
import Filter from './components/Filter/filter.js';
import Card from './components/Card/card.js';
import Text from './components/Text/text.js';

// Component styles
import styles from './Travel.styles.js';

@connect(state => state.places)
export default class Travel extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    places: React.PropTypes.array,
  }

  render() {
    const { language, mode } = this.props.params;
    const { places } = this.props;

    return (
      <div className={ styles }>
        <div className="container">
          <div className="row">
            <Filter />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                Travel stories
              </h2>
              {
                places.map((place) => {
                  return (
                    mode === 'card' ? <Card place={ place } language={ language } /> : <Text place={ place } language={ language } />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
