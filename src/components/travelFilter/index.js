import React, { Component } from 'react';
import { Link } from 'react-router';

// Actions
import { setTravelViewMode } from '../../actions/application.js';

// Component styles
import styles from './Filter.styles.js';

export default class Filter extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  }

  changeMode(mode) {
    const { dispatch } = this.props;

    dispatch(setTravelViewMode(mode));
  }

  render() {
    const { application } = this.props;

    return (
      <div className={ styles }>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-1 col-lg-1">
            <Link to={ `/${ application.language }/travel/card` }
                  onClick={ () => this.changeMode('card') }>
              ☷
            </Link>

             <Link to={ `/${ application.language }/travel/text` }
                   onClick={ () => this.changeMode('text') }>
              ☰
            </Link>
          </div>
        </div>
      </div>
    );
  }
}