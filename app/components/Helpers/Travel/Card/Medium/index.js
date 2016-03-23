import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

// Utils
import {
  generateUrlToPlace,
  generateUrlToPostThumb,
} from '../../../../../utils/travel';

// Components
import NewLabel from '../../NewLabel';
import VisitedDate from '../../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Medium = place =>
  <Col
    className={`
      ${styles}
      ${place.className}
    `}
    xs={12}
    sm={12}
    md={4}
    lg={4}
  >
    <Link to={generateUrlToPlace(place)}>
      <div className={`data ${place.className}`}>
        <p className="city">
          {
            place.city
          }
          <NewLabel {...place} />
        </p>
        <VisitedDate {...place} />
      </div>
      <span className="img-wrap">
        <img src={generateUrlToPostThumb(place)} />
      </span>
    </Link>
  </Col>;

export default Medium;
