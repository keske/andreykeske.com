import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Component styles
import styles from './Filter.styles.js';

@connect(state => state.application)
export default class Filter extends Component {

  static propTypes = {
    application: React.PropTypes.object,
  }

  render() {
    const { application } = this.props;

    return (
      <div className={ styles }>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-1 col-lg-1">
            <Link to={ `${ application.language }/travel/card` }>
              ☷
            </Link>

             <Link to={ `${ application.language }/travel/text` }>
              ☰
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
