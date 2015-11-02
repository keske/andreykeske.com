import React, { Component } from 'react';

// Components
import NavFooter from '../../../../_navFooter/';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale';

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  componentDidMount() {
    window.onscroll = () => {
      this.refs.photos.style.backgroundPositionY = window.pageYOffset * 0.9;
    };
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    const photos = {
      background: `url(${ img }/italy.jpg)`,
      width: '100%',
      height: window.innerHeight,
      backgroundSize: 'cover',
    };

    return (
      <div className={ styles }>

        <div
          style={ photos }
          ref="photos"
        />
        <div className="top-page-city-name on-image">
          { Language.translate('City') }
        </div>

        <NavFooter style="white" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
