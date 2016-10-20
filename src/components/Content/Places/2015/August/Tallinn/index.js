import React, { Component, PropTypes } from 'react';
import ParallaxComponent from 'react-parallax-component';

// Components
import NavFooter from '../../../../../Helpers/Travel/NavFooter';

// Styles
import s from './index.css';

// Language
import Language from './locale';

export default class City extends Component {

  static propTypes = {
    routeParams: PropTypes.object,
  };

  render() {
    const { year, month, city, language } = this.props.routeParams;

    // Path to photos
    const img = `./app/components/Content/Places/${year}/${month}/${city.replace(/ /g, '')}/images`;

    // Set language
    Language.setLocale(language);

    return (
      <div className={styles}>
        <div style={{ height: window.innerHeight * 77 }}>

          <ParallaxComponent
            speed={`${Math.random() * 0.2}`}
            width={`${Math.floor(Math.random() * 400 + 300)}`}
            top={`${Math.floor(Math.random() * 1000)}`}
            left={`${Math.floor(Math.random() * 80)}%`}
          >
            <img src={`${img}/top.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent
            speed={`${Math.random() * 0.2}`}
            width={`${Math.floor(Math.random() * 400 + 300)}`}
            top={`${Math.floor(Math.random() * 1000)}`}
            left={`${Math.floor(Math.random() * 80)}%`}
          >
            <img src={`${img}/italy.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent
            speed={`${Math.random() * 0.2}`}
            width={`${Math.floor(Math.random() * 400 + 300)}`}
            top={`${Math.floor(Math.random() * 1000)}`}
            left={`${Math.floor(Math.random() * 80)}%`}
          >
            <img src={`${img}/bird.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent
            speed={`${Math.random() * 0.2}`}
            width={`${Math.floor(Math.random() * 400 + 300)}`}
            top={`${Math.floor(Math.random() * 1000)}`}
            left={`${Math.floor(Math.random() * 80)}%`}
          >
            <img src={`${img}/heads.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent
            speed={`${Math.random() * 0.2}`}
            width={`${Math.floor(Math.random() * 400 + 300)}`}
            top={`${Math.floor(Math.random() * 1000)}`}
            left={`${Math.floor(Math.random() * 80)}%`}
          >
            <img src={`${img}/house.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent
            speed={`${Math.random() * 0.2}`}
            width={`${Math.floor(Math.random() * 400 + 300)}`}
            top="100"
            left="180"
          >
            <div className="top-page-city-name">
              {Language.translate('City')}
            </div>
          </ParallaxComponent>

          <ParallaxComponent
            speed={`${Math.random() * 0.2}`}
            width={`${Math.floor(Math.random() * 400 + 300)}`}
            top="200"
            left="180"
          >
            <p>
              {Language.translate('Intro')}
            </p>
          </ParallaxComponent>

        </div>

        <NavFooter style="" year={year * 1} month={month} city={city} language={language} />
      </div>
    );
  }

}
