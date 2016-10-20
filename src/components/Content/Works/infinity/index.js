import React, { Component, PropTypes } from 'react';



// Styles
import s from './index.css';

// Language
import Language from './locale/';

export default class Work extends Component {

  static propTypes = {
    params: PropTypes.object,
    language: PropTypes.string,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.onScoll, false);
  }

  componentDidUpdate() {
    document.removeEventListener('scroll', this.onScoll, false);
  }

  onScoll = () => {
    // console.log(document.body.scrollTop);
    // window.pageYOffset
    // console.log(window.innerHeight);
  }

  render() {
    const { work } = this.props.params;

    // Path to photos
    const path = `./app/components/Content/Works/${work}/files`;

    // Application settings
    const { language } = this.props;

    // Set language
    Language.setLocale(language);

    const metaData = {
      title: `${Language.translate('Title')} — ${Language.translate('Text')}`,
      description: Language.translate('Text'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Title'),
        },
      },
    };

    return (
      <div className={styles}>
        
        <div className="overflow">
          <img
            src={require('./files/space.jpg')}
            style={{
              width: 'auto',
              height: window.innerHeight * 2,
            }}
          />
          <img
            src={require('./files/infinity.png')}
            className="infinity"
            style={{
              top: (window.innerHeight / 2) - 100,
              left: (window.innerWidth / 2) - 150,
            }}
          />
        </div>
      </div>
    );
  }

}
