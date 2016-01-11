import React, { Component } from 'react';

// Components
import { LinkToImage } from 'components/';
import NavFooter from '../../../../_navFooter/';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  };

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={ styles }>
        <LinkToImage url={ `${ img }/thumb.jpg` } />

        <div className="top-page-city-name on-image">
          { Language.translate('Tallin') }
        </div>

        <div className="photo">
          <LinkToImage url={ `${ img }/1.jpg` } />
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/3.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/4.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <LinkToImage url={ `${ img }/5.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/6.gif` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/8.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/9.jpg` } />
            </div>

          </div>
        </div>

        <NavFooter year={ year * 1 } month={ month } city={ city } language={ language } />

        <LinkToImage url={ `${ img }/footer.jpg` } />
      </div>
    );
  }

}
