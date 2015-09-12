import React, { Component } from 'react';
import { Link } from 'react-router';

import $ from 'jquery';

// Component styles
import styles from './styles.js';

export default class Header extends Component {

  componentDidMount() {
    this.hideHeaderWhenScrolling();
  }

  render() {
    return (
      <div className={ `${ styles }` } ref="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2">
              <a href="/">
                  Andrey Keske
              </a>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10 header-nav">
              <Link to={ `ru/travel/` }>
                <span className="nav">Travel</span>
              </Link>
              <Link to={ `ru/works/` }>
                <span className="nav">Works</span>
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
