import React, { Component } from 'react';
import { Link } from 'react-router';

// Component styles
import styles from './styles.js';

export default class Header extends Component {
  render() {
    return (
      <div className={ `${ styles }` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2">
              <a href="/#/">
                  Andrey Keske
              </a>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10 header-nav">
              <Link to={ `/travel/` }>
                <span className="nav">Travel</span>
              </Link>
              <Link to={ `/works/` }>
                <span className="nav">Works</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
