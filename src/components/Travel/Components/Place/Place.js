import React, { Component } from 'react';

// Component styles
import styles from './Place.styles.js';

// Nav footer
import NavFooter from './components/navFooter/navFooter.js';

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

  // September 2014
  BerlinInSeptember2014,
  BudapestInSeptember2014,
  PragueInSeptember2014,

  // October 2014
  HelsinkiInOctober2014,

  // March 2014
  TallinInMarch2014,

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

  // September 2014
  'BerlinInSeptember2014': BerlinInSeptember2014,
  'BudapestInSeptember2014': BudapestInSeptember2014,
  'PragueInSeptember2014': PragueInSeptember2014,

  // October 2014
  'HelsinkiInOctober2014': HelsinkiInOctober2014,

  // March 2014
  'TallinInMarch2014': TallinInMarch2014,

  // December 2014
  'SpindleruvMlynInDecember2014': SpindleruvMlynInDecember2014,
};

export default class Place extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    language: React.PropTypes.string,
  }

  render() {
    const { year, month, city, language } = this.props.params;
    const place = `${ city.replace(/ /g, '') }In${ month }${ year }`;

    return (
      <div className={ styles }>
        { React.createElement(data[place], this.props) }
        <NavFooter year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }
}
