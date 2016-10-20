import React, { Component, PropTypes } from 'react';

// Components
import LinkToImage from '../../../../../Helpers/LinkToImage';
import NavFooter from '../../../../../Helpers/Travel/NavFooter';

// Styles
import s from './index.css';

// Language
import Language from './locale/';

export default class City extends Component {

  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./app/components/Content/Places/${year}/${month}/${city.replace(/ /g, '')}/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={styles}>
        <div className="container">

          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={`${img}/1.jpg`} />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={`${img}/2.jpg`} />
            </div>

          </div>

        </div>

        <NavFooter style="white" year={year * 1} month={month} city={city} language={language} />
      </div>
    );
  }

}
