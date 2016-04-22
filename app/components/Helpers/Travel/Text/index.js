import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

// Components
import NewLabel from '../NewLabel';
import VisitedDate from '../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Text = place => {

  const renderInner = () => (
    <Col
      className={styles}
      xs={12}
      sm={12}
      md={8}
      lg={8}
    >
      <div className={'data'}>
        <p className="city">
          { place.city }
        </p>
        <VisitedDate {...place} />
        <NewLabel {...place} />
      </div>
    </Col>
  );

  return (
    place.cover
      ? <Link to={`/${place.language}/places/${place.year}/${place.month}/${place.city}`}>
          { renderInner() }
        </Link>
      : renderInner()
  );
};

export default Text;
