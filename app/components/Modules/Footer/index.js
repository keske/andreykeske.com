import React, { Component } from 'react';

// Component styles
import { styles } from './styles/styles.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Versions:
              <a href="old/2014/">2014</a>
              <a href="old/2013-III/">2013 3.0</a>
              <a href="old/2013-II/">2013 2.0</a>
              <a href="old/2013-I/">2013 1.0</a>
              <a href="old/2012/">2012</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
