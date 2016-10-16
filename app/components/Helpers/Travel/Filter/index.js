import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

// Component styles
import { styles } from './styles.scss';

const Filter = props => {

  const handleViewMode = mode => {
    props.setTravelViewMode(mode);
  };

  return (
    <Row className={styles}>
      <Col
        xs={3}
        sm={3}
        md={2}
        lg={2}
      >
        <span className="title">
          View:
        </span>
        <Link
          to={`/${props.params.language}/travel/card`}
          onClick={() => handleViewMode('card')}
          activeClassName="active"
        >
          ☷
        </Link>

        <Link
          to={`/${props.params.language}/travel/text`}
          onClick={() => handleViewMode('text')}
          activeClassName="active"
        >
          ☰
        </Link>
      </Col>
    </Row>
  );
};

Filter.propTypes = {
  params: PropTypes.object,
  setTravelViewMode: PropTypes.func,
};

export default Filter;
