import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Places
import {
  // January 2016
  YekaterinburgInJanuary2016,

  // September 2015
  BarcelonaInSeptember2015,

  // August 2015
  TallinnInAugust2015,

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
  TallinnInMarch2014,

  // December 2014
  SpindleruvMlynInDecember2014,
} from './places/index.js';

const data = {
  // January 2016
  YekaterinburgInJanuary2016,

  // September 2015
  BarcelonaInSeptember2015,
  // August 2015
  TallinnInAugust2015,

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
  TallinnInMarch2014,

  // December 2014
  SpindleruvMlynInDecember2014,
};

export default class Place extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    language: React.PropTypes.string,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
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
