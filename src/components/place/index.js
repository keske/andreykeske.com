import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// Component styles
import styles from './Place.styles.js';

// Places
import {
  // September 2015
  BarcelonaInSeptember2015,

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
  // September 2015
  'BarcelonaInSeptember2015': BarcelonaInSeptember2015,

  // August 2015
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
    const { year, month, city } = this.props.params;
    const component = `${ city.replace(/ /g, '') }In${ month }${ year }`;

    const metaData = {
      title: `${ city } In ${ month } ${ year }`,
      description: `${ year } ${ month } ${ city }`,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: `${ year }, ${ month }, ${ city }`,
        },
      },
    };

    return (
      <div className={ `${ styles } place.class` }>
        <DocumentMeta { ...metaData } />
        { React.createElement(data[component], this.props) }
      </div>
    );
  }
}
