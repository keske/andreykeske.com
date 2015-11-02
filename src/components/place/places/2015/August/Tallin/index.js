import React, { Component } from 'react';

// Components
import { LinkToImage } from 'components/';
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
    this.refs.page.style.height = window.innerHeight * 100;
    this.move();
  }

  move() {
    window.onscroll = () => {
      this.refs.page.style.marginTop = window.pageYOffset * 0.9;
      // $(this.refs.page).animate({marginTop: window.pageYOffset * 0.9},
        // {duration: 100, queue: false});
    };
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={ styles } ref="page">

        <img src={ `${ img }/top.jpg` } />
        <div className="top-page-city-name on-image">
          { Language.translate('City') }
        </div>

        <div className="container">

          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/italy.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/bird.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/house.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/heads.jpg` } />
            </div>

          </div>

        </div>

        <NavFooter style="white" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
