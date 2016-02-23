import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Actions
import { setTravelViewMode } from '../../../../actions/application.js';

// Component styles
import { styles } from './styles.scss';

const Filter = props => {

  const handleViewMode = () => {
    props.dispatch(setTravelViewMode(props.mode));
  };

  return (
    <div className={styles}>
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
          <span className="title">
            View:
          </span>
          <Link to={`/${props.application.language}/travel/card`}
            onClick={() => handleViewMode('card')}
            activeClassName="active"
          >
            ☷
          </Link>

          <Link to={`/${props.application.language}/travel/text`}
            onClick={() => handleViewMode('text')}
            activeClassName="active"
          >
            ☰
          </Link>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  application: PropTypes.object,
};

export default Filter;
