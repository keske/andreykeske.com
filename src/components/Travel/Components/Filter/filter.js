import React, { Component } from 'react';
import { Link } from 'react-router';

// Component styles
import styles from './Filter.styles.js';

export default class Filter extends Component {

  static propTypes = {
    mode: React.PropTypes.string,
  }

  render() {
    // const { mode } = this.props;

    return (
      <div className={ styles }>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-1 col-lg-1">
            <Link to={ `ru/travel/card` }>
              ☷
            </Link>

             <Link to={ `ru/travel/text` }>
              ☰
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
