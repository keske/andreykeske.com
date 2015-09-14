import React, { Component } from 'react';

// Components
import { LinkToImage } from '../../../../../../../../components/';
import NavFooter from '../../../../components/navFooter/navFooter.js';

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
        <LinkToImage url={ `${ img }/thumb.jpg` } />

        <div className="top-page-city-name on-image">
          { Language.translate('Budapest') }
        </div>

        <LinkToImage url={ `${ img }/1.jpg` } />

        <LinkToImage url={ `${ img }/2.jpg` } />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/3.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/4.jpg` } />
            </div>

          </div>
        </div>

        <NavFooter year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
