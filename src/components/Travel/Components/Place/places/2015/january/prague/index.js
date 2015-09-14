import React, { Component } from 'react';

// Components
import { LinkToImage } from '../../../../../../../../components/';
import NavFooter from '../../../../components/navFooter/navFooter.js';

// Component styles
import styles from './styles.js';

export default class PragueInDecember2014 extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/Travel/Components/Place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    return (
      <div className={ styles }>
        <LinkToImage url={ `${ img }/thumb.jpg` } />
        <LinkToImage url={ `${ img }/1.jpg` } />

        <NavFooter style="white bottom-on-photo" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
