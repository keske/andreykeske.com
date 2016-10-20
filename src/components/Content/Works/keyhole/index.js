import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

// Language
import Language from './locale/';

// Styles
import s from './index.css';

export default class Module extends Component {

  static propTypes = {
    language: PropTypes.string,
  };

  handleMove = (event) => {
    $(this.refs.girl)
      .css('marginLeft', (event.clientX.toFixed(0) / 20) * -1)
      .css('marginTop', (event.clientY.toFixed(0) / 20 + 20) * -1);
  };

  render() {
    const { language } = this.props;

    // Set language
    Language.setLocale(language);

    return (
      <div className={s.root}>
        <h1>
          {Language.translate('Title')}
        </h1>
        <p>
          {Language.translate('Text1')}
          <br />
          {Language.translate('Text2')}
        </p>

        <div
          className={s.center}
          onMouseMove={(event) => { this.handleMove(event); }}
        >
          <div className={s.girl}>
            <img
              src={require('./files/girl.png')}
              role="presentation"
              ref="girl"
            />
          </div>
          <span
            className={s.keyhole}
          >
            <img
              src={require('./files/keyhole.png')}
              role="presentation"
            />
          </span>
        </div>
      </div>
    );
  }
}
