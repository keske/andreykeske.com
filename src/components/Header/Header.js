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
              <Link to={ `ru/travel/card` }>
                <span className="nav">
                  { Language.translate('Travel') }
                </span>
              </Link>
              <Link to={ `ru/works/` }>
                <span className="nav">
                  { Language.translate('Works') }
                </span>
              </Link>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              <div onClick={ () => this.toggleLanguage() }>
                { application.language }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Togle language between `ru` and `en`
  toggleLanguage() {
    const { dispatch, application } = this.props;

    // router.replaceWith('/users/123');

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
