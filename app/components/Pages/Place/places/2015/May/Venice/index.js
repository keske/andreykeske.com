import React, { Component } from 'react';

// Components
import { LinkToImage } from '../../../../../../Helpers/LinkToImage';
import { NavFooter } from '../../../../../../Helpers/Travel/NavFooter';

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
        <img src={ `${ img }/top.jpg` } />

        <div className="top-page-city-name on-image">
          { Language.translate('Venice') }
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Linen') }
              </h2>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/linen/linen-3.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/linen/linen-2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/linen/linen-1.jpg` } />
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Life') }
              </h2>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/life/life-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/life/life-2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/life/life-3.jpg` } />
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Streets') }
              </h2>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/streets/street-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/streets/street-2.jpg` } />
            </div>

            <div className="photo photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/streets/street-5.jpg` } />
            </div>

            <div className="photo photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/streets/street-6.jpg` } />
            </div>

            <div className="photo photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/streets/street-3.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/streets/street-4.jpg` } />
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Channels') }
              </h2>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/channels/channel-5.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/channels/channel-1.jpg` } />
            </div>

            <div className="photo col-xs-6 col-sm-6 col-md-4 col-lg-4">
              <img src={ `${ img }/channels/channel-3.jpg` } />
            </div>

            <div className="photo col-xs-6 col-sm-6 col-md-4 col-lg-4">
              <img src={ `${ img }/channels/channel-4.jpg` } />
            </div>

            <div className="photo col-xs-6 col-sm-6 col-md-4 col-lg-4">
              <img src={ `${ img }/channels/channel-2.jpg` } />
            </div>

            <div className="photo col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <img src={ `${ img }/channels/channel-6.jpg` } />
            </div>

            <div className="photo col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <img src={ `${ img }/channels/channel-7.jpg` } />
            </div>

            <div className="photo col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <img src={ `${ img }/channels/channel-8.jpg` } />
            </div>

            <div className="photo col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <img src={ `${ img }/channels/channel-9.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/channels/channel-10.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/channels/channel-11.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/channels/channel-12.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${ img }/channels/channel-13.jpg` } />
            </div>

          </div>
        </div>

        <img src={ `${ img }/bottom.jpg` } className="photo-margin-top" />

        <NavFooter style="white bottom-on-photo" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
