import React, { Component } from 'react';
import { connect } from 'react-redux';
// import reactMixin from 'react-mixin';
import { Link, History } from 'react-router';

// Actions
import { setLanguage } from '../../actions/application.js';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

// @reactMixin.decorate(History)
@connect(state => state.application)
export default class Header extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  }

  componentDidMount() {
    this.hideHeaderWhenScrolling();
  }

  render() {
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    return (
      <div className={ `${ styles }` } ref="header">
        <img src="me.jpg" className="face" alt="Andrey Keske" />

        <p>
          I am Andrey Keske designer and front-end developer.
        </p>

        <h2>
          Get in touch with me
        </h2>

        <ul>
          <li>
            <a href="mailto:hello@andreykeske.com">hello@andreykeske.com</a>
          </li>
          <li>
            <a href="https://github.com/keske">Github</a>
          </li>
          <li>
            <a href="https://www.facebook.com/andrey.keske">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com/andreykeske/">Instagram</a>
          </li>
        </ul>
      </div>
    );
  }

  // Togle language between `ru` and `en`
  toggleLanguage() {
    const { dispatch, application } = this.props;

    // router.replaceWith('/#/en/travel/card');
    // console.log(this.context.router)
    // Router.transitionTo('/');

    application.language === 'ru' ? dispatch(setLanguage('en')) : dispatch(setLanguage('ru'));
  }

  // Smooth hide header when scrolling
  hideHeaderWhenScrolling() {
    let opacity = 0;

    window.onscroll = () => {
      opacity = 1 - (window.pageYOffset / 50).toFixed(1);
      this.refs.header.getDOMNode().style.opacity = opacity;
    };
  }
}
