import React, { Component } from 'react';

// Components
import NavFooter from './../../../../components/navFooter/navFooter.js';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

export default class FlorenceInMay2015 extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/Travel/Components/Place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    return (<div className={ styles }>
      <div className="page-style"
        data-bgcolor="black">
      </div>

      <img src={ `${ img }/top.jpg` } />

      <div className="top-page-city-name on-image">
        { Language.translate('Florence') }
      </div>

      <img src={ `${ img }/city.jpg` } className="photo" />

      <img src={ `${ img }/cathedral-1.jpg` } className="photo" />

      <div className="container">
        <div className="row">

          <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href={ `${ img }/cathedral-2.jpg` }>
              <img src={ `${ img }/cathedral-2.jpg` } />
            </a>
          </div>

          <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href={ `${ img }/street-1.jpg` }>
              <img src={ `${ img }/street-1.jpg` } />
            </a>
          </div>

          <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href={ `${ img }/street.jpg` }>
              <img src={ `${ img }/street.jpg` } />
            </a>
          </div>

          <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href={ `${ img }/cathedral-3.jpg` }>
              <img src={ `${ img }/cathedral-3.jpg` } />
            </a>
          </div>

          <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <a target="_blank" href={ `${ img }/photobooth.jpg` }>
              <img src={ `${ img }/photobooth.jpg` } />
            </a>
          </div>

          <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <a target="_blank" href={ `${ img }/street-2.jpg` }>
              <img src={ `${ img }/street-2.jpg` } />
            </a>
          </div>

          <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href={ `${ img }/bar.jpg` }>
              <img src={ `${ img }/bar.jpg` } />
            </a>
          </div>

        </div>
      </div>

      <img src={ `${ img }/bottom.jpg` } className="photo-margin-top" />

      <NavFooter style="white bottom-on-photo" year={ year * 1 } month={ month } city={ city } language={ language } />
    </div>);
  }

  state = {
    data: null,
  }
}
