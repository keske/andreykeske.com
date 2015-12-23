import React, { Component } from 'react';
import ParallaxComponent from 'react-parallax-component';

// Components
import NavFooter from '../../../../_navFooter/';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale';

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    const wrap = {
      height: window.innerHeight * 77,
    };

    return (
      <div className={ styles }>

        <div style={ wrap }>

          <ParallaxComponent speed={ `${Math.random() * (0.02 - 0) + 0}` }
                             width={`${ Math.floor(Math.random() * (700 - 300) + 300)} `}
                             top={`${ Math.floor(Math.random() * (1000 - 0) + 0) }`}
                             left={ `${Math.floor(Math.random() * (80 - 0) + 0)}%` }>
            <img src={`${ img }/top.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent speed={ `${Math.random() * (0.02 - 0) + 0}` }
                             width={`${ Math.floor(Math.random() * (700 - 300) + 300)} `}
                             top={`${ Math.floor(Math.random() * (1000 - 0) + 0) }`}
                             left={ `${Math.floor(Math.random() * (80 - 0) + 0)}%` }>
            <img src={`${ img }/italy.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent speed={ `${Math.random() * (0.02 - 0) + 0}` }
                             width={`${ Math.floor(Math.random() * (700 - 300) + 300)} `}
                             top={`${ Math.floor(Math.random() * (1000 - 0) + 0) }`}
                             left={ `${Math.floor(Math.random() * (80 - 0) + 0)}%` }>
            <img src={`${ img }/bird.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent speed={ `${Math.random() * (0.02 - 0) + 0}` }
                             width={`${ Math.floor(Math.random() * (700 - 300) + 300)} `}
                             top={`${ Math.floor(Math.random() * (1000 - 0) + 0) }`}
                             left={ `${Math.floor(Math.random() * (80 - 0) + 0)}%` }>
            <img src={`${ img }/heads.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent speed={ `${Math.random() * (0.02 - 0) + 0}` }
                             width={`${ Math.floor(Math.random() * (700 - 300) + 300)} `}
                             top={`${ Math.floor(Math.random() * (1000 - 0) + 0) }`}
                             left={ `${Math.floor(Math.random() * (80 - 0) + 0)}%` }>
            <img src={`${ img }/house.jpg`} />
          </ParallaxComponent>

          <ParallaxComponent speed={ `${Math.random() * (0.02 - 0) + 0}` }
                             width={`${ Math.floor(Math.random() * (700 - 300) + 300)} `}
                             top="100"
                             left="180">
            <div className="top-page-city-name">
              { Language.translate('City') }
            </div>
          </ParallaxComponent>

          <ParallaxComponent speed={ `${Math.random() * (0.02 - 0) + 0}` }
                             width={`${ Math.floor(Math.random() * (700 - 300) + 300)} `}
                             top="200"
                             left="180">
            <p>
              { Language.translate('Intro') }
            </p>
          </ParallaxComponent>

        </div>

        <NavFooter style="" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
