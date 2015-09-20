import React, { Component } from 'react';
import { connect } from 'react-redux';

// View mode, card or text
import Filter from './components/filter/Filter.js';
import Card from './components/card/Card.js';
import Text from './components/text/Text.js';

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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Filter mode={ mode } />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                Travel stories
              </h2>
            </div>
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
    );
  }
}
