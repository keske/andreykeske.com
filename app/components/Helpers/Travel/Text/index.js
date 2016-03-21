import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

import { showNewLabel } from '../../../../utils/travel';

// Components
import NewLabel from '../NewLabel';
import VisitedDate from '../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Text = place => {

  const renderInner = () => (
    <Col
      className={`
        ${styles}
        year-${place.year}
      `}
      xs={12}
      sm={12}
      md={12}
      lg={12}
    >
      <div className={'data'}>
        {
          showNewLabel(place.date) &&
            <NewLabel />
        }
        <p className="city">
          { place.city }
        </p>
        <VisitedDate {...place} />
      </div>
    </Col>
  );

  return (
    place.cover
      ? <Link to={`/${place.language}/places/${place.year}/${place.month}/${place.city}`}>
          {
            renderInner()
          }
        </Link>
      : renderInner()
  );
};

export default Text;
