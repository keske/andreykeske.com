import React, { Component } from 'react';
import { Link } from 'react-router';

import $ from 'jquery';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

export default class Header extends Component {

  componentDidMount() {
    this.hideHeaderWhenScrolling();
  }

  render() {
    // Set language
    // TODO: from reducers
    Language.setLocale('ru');

    return (
      <div className={ `${ styles }` } ref="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2">
              <a href="/">
                  { Language.translate('AndreyKeske') }
              </a>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10 header-nav">
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
          </div>
        </div>
      </div>
    );
  }

  hideHeaderWhenScrolling() {
    let opacity = 0;

    $(window).scroll(() => {
      opacity = 1 - ($(window).scrollTop() / 50).toFixed(1);

      $(this.refs.header.getDOMNode()).css('opacity', opacity);
    });
  }
}
