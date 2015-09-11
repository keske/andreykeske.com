import React, { Component } from 'react';

// Component styles
import styles from './Place.styles.js';

// Places
import {
  // August 2015
  TallinInAugust2015,

  // May 2015
  VeniceInMay2015,
  FlorenceInMay2015,
  RomeInMay2015,

  // January 2015
  PragueInJanuary2015,
  MunichInJanuary2015,

  // December 2014
  SpindleruvMlynInDecember2014,
} from './places/index.js';

const data = {
  // August
  'TallinInAugust2015': TallinInAugust2015,

  // May 2015
  'VeniceInMay2015': VeniceInMay2015,
  'FlorenceInMay2015': FlorenceInMay2015,
  'RomeInMay2015': RomeInMay2015,

  // January 2015
  'PragueInJanuary2015': PragueInJanuary2015,
  'MunichInJanuary2015': MunichInJanuary2015,

  // December 2014
  'SpindleruvMlynInDecember2014': SpindleruvMlynInDecember2014,
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
