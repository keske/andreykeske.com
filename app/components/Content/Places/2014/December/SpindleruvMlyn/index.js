import React, { Component, PropTypes } from 'react';

// Components
import LinkToImage from '../../../../../Helpers/LinkToImage';
import NavFooter from '../../../../../Helpers/Travel/NavFooter';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

export default class VeniceInMay2015 extends Component {

  static propTypes = {
    params: PropTypes.object,
  };

  state = {
    data: null,
  };

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./app/components/Content/Places/${year}/${month}/${city.replace(/ /g, '')}/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={styles}>
        <img src={ `${img}/15.jpg` } />

        <div className="top-page-city-name on-image">
          { Language.translate('SpindleruvMlyn') }
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('DayOne') }
              </h2>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/4.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('DayTwo') }
              </h2>
            </div>

          </div>

        </div>

        <div className="photo">
          <img src={ `${img}/16.jpg` } />
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/20.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/19.jpg` } />
            </div>

          </div>
        </div>

        <div className="photo">
          <img src={ `${img}/17.jpg` } />
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/23.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/24.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/25.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/26.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/27.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/28.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/29.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${img}/3.jpg` } />
            </div>

          </div>
        </div>


        <NavFooter year={year * 1} month={month} city={city} language={language} />
      </div>
    );
  }
}
