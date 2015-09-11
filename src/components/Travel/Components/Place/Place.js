import React, { Component } from 'react';

// Component styles
import styles from './Place.styles.js';

// Places
import {
  VeniceInMay2015,
  FlorenceInMay2015,
  RomeInMay2015,
  PragueInJanuary2015
} from './places/index.js';

const data = {
  'VeniceInMay2015': VeniceInMay2015,
  'FlorenceInMay2015': FlorenceInMay2015,
  'RomeInMay2015': RomeInMay2015,
  'PragueInJanuary2015': PragueInJanuary2015,
};

export default class Place extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { year, month, city } = this.props.params;
    const place = `${ city }In${ month }${ year }`;

    return (
      <div className={ styles }>
        { React.createElement(data[place], this.props) }
      </div>
    );
  }
}
