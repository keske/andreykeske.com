import React, { Component } from 'react';

// Components
import { LinkToImage } from '../../../../../../../components/';
import NavFooter from '../../../../_navFooter/';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/Travel/Components/Place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={ styles }>
      123
        <NavFooter style="white bottom-on-photo"
          year={ year * 1 }
          month={ month }
          city={ city }
          language={ language } />
      </div>
    );
  }

}
