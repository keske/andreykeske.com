import React, { Component } from 'react';
import { Link } from 'react-router';

// Component styles
import styles from './Filter.styles.js';

export default class Filter extends Component {

  render() {
    return (
      <div className={ styles }>
        <div className="col-xs-3 col-sm-3 col-md-1 col-lg-1 filter">
          <div
            ng-click="mode = 'card'"
            ng-className="{'active': mode == 'card'}">
            ☷
          </div>

          <div
            ng-click="mode = 'text'"
            ng-className="{'active': mode == 'text'}">
            ☰
          </div>
        </div>

        <div className="col-xs-5 col-sm-5 col-md-3 col-lg-3 filter">
          <div
            ng-click="order = '-year'"
            ng-className="{'active': order == '-year'}">
              Time
            </div>

          <div
            ng-click="order = 'city'"
            ng-className="{'active': order == 'city'}">
              A-Z
            </div>

          <div
            ng-click="order = 'country'"
            ng-className="{'active': order == 'country'}">
              Country
            </div>
        </div>
      </div>

    );
  }
}
