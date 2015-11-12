import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions
import { setLanguage } from '../../actions/application.js';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class Header extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  }

  componentDidMount() {
    this.hideHeaderWhenScrolling();
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
    window.onscroll = () => {
      const opacity = 1 - (window.pageYOffset / 50).toFixed(1);
      this.refs.header.style.opacity = opacity;
    };
  }

  render() {
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    return (
      <div className={ `${ styles }` } ref="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2">
              <a href="/">
                  { Language.translate('AndreyKeske') }
              </a>
            </div>
            <div className="col-xs-7 col-sm-7 col-md-9 col-lg-9 header-nav">
              <Link to={ `/${ application.language }/works` } className="nav">
                { Language.translate('Works') }
              </Link>

              <Link to={ `/${ application.language }/travel/${ application.mode }` } className="nav">
                { Language.translate('Travel') }
              </Link>

              <Link to={ `/${ application.language }/about` } className="nav">
                { Language.translate('About') }
              </Link>
            </div>
            {
              /*
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <div onClick={ () => this.toggleLanguage() }>
                  { application.language }
                </div>
              </div>
              */
            }
          </div>
        </div>
      </div>
    );
  }
}
