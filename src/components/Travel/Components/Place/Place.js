import React, { Component } from 'react';

// Component styles
import styles from './Place.styles.js';

// Places
import { VeniceInMay2015 } from './places/index.js';

export default class Place extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    // React.createElement(window['VeniceInMay2015'], {name: 'VeniceInMay2015'});
    // const { year, month, city } = this.props.params;
    // const place = eval(`${ city }In${ month }${ year }`);
    // const Comp = window['VeniceInMay2015'];
    return (
      <div className={ styles }>
        { React.createElement(VeniceInMay2015) }
      </div>
    );
  }
}
