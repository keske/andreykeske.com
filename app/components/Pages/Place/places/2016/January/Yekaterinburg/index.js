import React, { Component } from 'react';

// Components
import NavFooter from '../../../../../../Helpers/Travel/NavFooter';
// import Unsharpness from '../../../../../Unsharpness/';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale';

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  };

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./app/components/Pages/Place/places/${year}/${month}/${city.replace(/ /g, '')}/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={styles}>

        YEK

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              asd
            </div>
          </div>
        </div>

        <NavFooter style="" year={year * 1} month={month} city={city} language={language} />
      </div>
    );
  }

}
