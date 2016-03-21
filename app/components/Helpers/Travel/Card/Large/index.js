import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

// Utils
import { showNewLabel } from '../../../../../utils/travel';

// Components
import NewLabel from '../../NewLabel';
import VisitedDate from '../../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Large = place =>
  <Col
    className={`
      ${styles}
      ${place.className}
    `}
    xs={12}
    sm={12}
    md={8}
    lg={8}
  >
    <Link to={`/${place.language}/places/${place.year}/${place.month}/${place.city}`}>
      <div className={`data ${place.className}`}>
        <p className="city">
          {
            place.city
          }
          {
            showNewLabel(place.date) &&
              <NewLabel />
          }
        </p>
        <VisitedDate {...place} />
      </div>
      <span className="img-wrap">
        <img src={`./app/components/Content/Places/${place.year}/${place.month}/${place.city.replace(/ /g, '')}/images/thumb.jpg`} />
      </span>
    </Link>
  </Col>;

export default Large;
