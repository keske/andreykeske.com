import React, { Component } from 'react';

// Components
import LinkToImage from '../../../../../Helpers/LinkToImage';
import NavFooter from '../../../../../Helpers/Travel/NavFooter';

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
    const img = `./app/components/Content/Places/${year}/${month}/${city.replace(/ /g, '')}/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={styles}>
        <div className="page-style"
          data-bgcolor="black">
        </div>

        <img src={ `${img}/top.jpg` } />

        <div className="top-page-city-name on-image">
          { Language.translate('Florence') }
        </div>

        <img src={ `${img}/city.jpg` } className="photo" />

        <img src={ `${img}/cathedral-1.jpg` } className="photo" />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${img}/cathedral-2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${img}/street-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${img}/street.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${img}/cathedral-3.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/photobooth.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/street-2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${img}/bar.jpg` } />
            </div>

          </div>
        </div>

        <img src={ `${img}/bottom.jpg` } className="photo-margin-top" />

        <NavFooter style="white bottom-on-photo" year={year * 1} month={month} city={city} language={language} />
      </div>
    );
  }

}
