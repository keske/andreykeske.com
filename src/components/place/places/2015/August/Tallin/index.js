import React, { Component } from 'react';
import { setParallax } from '../../../../../../utils/parallax';

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

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // setParallax(this.refs.parallax, -700);
    const top = - (window.pageYOffset - this.refs.parallax.offsetTop) * 0.03;

    this.refs.parallax.style.top = `${ top }px`;
    this.refs.parallaxSecond.style.top = `${ top }px`;
    // this.refs.parallax.style.backgroundPosition = `0px ${ top }px`;
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    const body = {
      height: window.innerHeight * 30,
    };

    const photos = {
      background: `url(${ img }/italy.jpg)`,
      width: '30%',
      height: window.innerHeight,
      position: 'fixed',
      backgroundSize: '100% auto',
    };

    return (
      <div className={ styles } style={ body }>

        <div
          style={ photos }
          ref="parallax"
        />
        <div
          style={ photos }
          ref="parallaxSecond"
        />
        <div className="top-page-city-name on-image">
          { Language.translate('City') }
        </div>

        <NavFooter style="white" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
