import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import R from 'ramda';

// Utils
import {
  showNewLabel,
  generateUrlToPlace,
  generateUrlToPostThumb,
} from '../../../../../utils/travel';

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
    <Link to={generateUrlToPlace(place)}>
      <div className={`data ${place.className}`}>
        <p className="city">
          {
            place.city
          }
          {
            R.ifElse(
              R.equals(R.__, true),
              () => <NewLabel language={place.language} />,
              () => '',
            )(showNewLabel(place.date))
          }
        </p>
        <VisitedDate {...place} />
      </div>
      <span className="img-wrap">
        <img src={generateUrlToPostThumb(place)} />
      </span>
    </Link>
  </Col>;

export default Large;
