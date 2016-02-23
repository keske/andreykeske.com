import React, { Component } from 'react';
import { Link } from 'react-router';

// Actions
import { setTravelViewMode } from '../../actions/application.js';

// Component styles
import { styles } from './styles/styles.scss';

export default class Filter extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  };

  handleViewMode = mode => {
    const { dispatch } = this.props;
    dispatch(setTravelViewMode(mode));
  }

  render() {
    const { application } = this.props;

    return (
      <div className={styles}>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
            <span className="title">
              View:
            </span>
            <Link to={`/${application.language}/travel/card`}
              onClick={() => this.handleViewMode('card')}
              activeClassName="active"
            >
              ☷
            </Link>

            <Link to={`/${application.language}/travel/text`}
              onClick={() => this.handleViewMode('text')}
              activeClassName="active"
            >
              ☰
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
